import React, {Suspense, useContext, useEffect, useRef, useState} from "react";
import UserContext from "../context/UserContext"
import { useEntradasReserved } from "../hooks/useEntradasReserved";
import jsPDF from 'jspdf';

const ProfileComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/profile/ProfileComponent")), 1500)
    })
})

const ProfilePage = () => {
    const pdfRef = useRef(null);
    const {users} = useContext(UserContext)
    const {getEntradasReservedByUser, entradasReservedUser} = useEntradasReserved()
    const [viewEntradas, setViewEntradas] = useState(false);
    let text;
    function generatePDF() {
        //setViewEntradas(true)
        setTimeout(() => {
            const content = pdfRef.current;
            const doc = new jsPDF();
            // doc.html(
            //     content, {
            //         callback: function (doc) {
            //             doc.save('Entradas_'+ users?.username +'.pdf');
            //         }
            //     }
            // );
            // text = <div ref={pdfRef} className="text-center bg-info w-100">
            //             <div>ttt</div>
            //             <p>tt</p>
            //         </div>
            doc.text(entradasReservedUser[0].id_entrada.partido_id.eq1 + " VS " + entradasReservedUser[0].id_entrada.partido_id.eq2,
             10, 10);
            doc.save('Entradas_'+ users?.username +'.pdf');
        }, 200);
    }
    
    console.log(entradasReservedUser)
    useEffect(() => {
        getEntradasReservedByUser(users?.id)
    }, [users?.id])
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <ProfileComponent infoUser={users} entradasReservedUser={entradasReservedUser} generatePDF={generatePDF} viewEntradas={viewEntradas}/>
            {
                viewEntradas ?
                <div ref={pdfRef} className="text-center bg-info w-100">
                    <div>ttt</div>
                    <p>tt</p>
                </div>:
                <div></div>
            }
        </Suspense>
    )

}

export default ProfilePage