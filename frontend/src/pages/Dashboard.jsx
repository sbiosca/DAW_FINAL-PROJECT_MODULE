import React, {Suspense, useContext} from "react";
import UserContext from "../context/UserContext"
import { usePartidos } from "../hooks/usePartidos";
import { useUser } from "../hooks/useUsers";
import {useEntradas} from "../hooks/useEntradas"

const DashboardComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../components/dashboard/DashboardComponent")), 1500)
    })
})

const DashboardPage = () => {
    const { users } = useContext(UserContext);
    const {partidos} = usePartidos();
    const { usersAll } = useUser();
    const { entradas } = useEntradas();
    console.log(entradas)
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <DashboardComponent users={users} partidos={partidos} usersAll={usersAll} entradas={entradas}/>
        </Suspense>
    )

}

export default DashboardPage