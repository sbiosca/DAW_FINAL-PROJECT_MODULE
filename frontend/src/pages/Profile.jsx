import React, {Suspense, useContext, useEffect, useRef, useState} from "react";
import UserContext from "../context/UserContext"
import { useEntradasReserved } from "../hooks/useEntradasReserved";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ProfileComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/profile/ProfileComponent")), 1500)
    })
})

const ProfilePage = () => {
    const contentRef = React.createRef();
    const pdfRef = useRef(null);
    const {users} = useContext(UserContext)
    const {getEntradasReservedByUser, entradasReservedUser} = useEntradasReserved()
    const [viewEntradas, setViewEntradas] = useState(false);
    function generatePDF() {
        //setViewEntradas(true)
        const options = {
            scale: 20, // Ajusta la escala de la captura de pantalla
            useCORS: true, // Habilita el uso de CORS para imágenes externas
            logging: true, // Habilita los mensajes de registro de html2canvas en la consola
            // Añade más opciones según tus necesidades
        };

        const doc = new jsPDF();
        html2canvas(contentRef.current, options).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            doc.addImage(imgData, 'PNG', 10, 10, 205, 219);
            doc.save('Entradas_'+ users?.username +'.pdf');
        })
    }
    
    console.log(entradasReservedUser)
    useEffect(() => {
        getEntradasReservedByUser(users?.id)
    }, [users?.id])
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <ProfileComponent infoUser={users} entradasReservedUser={entradasReservedUser} generatePDF={generatePDF} viewEntradas={viewEntradas}
            contentRef={contentRef}/>
        </Suspense>
    )

}

export default ProfilePage