import React, {Suspense, useState} from "react";
import {useUser} from "../../hooks/useUsers"

const LoginComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/users/LoginComponent")), 1500)
    })
})

const LoginPage = () => {
    const [dataUser, setDataUser] = useState()
    const [eye, setEye] = useState(false)
    const viewEye = (value) => {
        setEye(value)
    }
    const {login} = useUser();
    const formData = (value) => {
        login(value)
        setDataUser(value)
        console.log(dataUser)
    }
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <LoginComponent formData={formData} viewEye={viewEye} eye={eye}/>
        </Suspense>
    )
}

export default LoginPage;