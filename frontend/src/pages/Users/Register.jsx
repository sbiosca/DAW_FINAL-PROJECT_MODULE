import React, {Suspense, useState} from "react";
import {useUser} from "../../hooks/useUsers"
const RegisterComponent = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("../../components/users/RegisterComponent")), 1500)
    })
})

const RegisterPage = () => {
    const {register} = useUser()
    const [eye, setEye] = useState(false)
    const viewEye = (value) => {
        setEye(value)
    }
    const formData = (value) => {
        register(value)
        console.log(value)
    }
    return (
        <Suspense fallback={<div className="text-center"><img className="w-25" src="https://usagif.com/wp-content/uploads/loading-4.gif"/></div>}>
            <RegisterComponent formData={formData} viewEye={viewEye} eye={eye}/>
        </Suspense>
    )
}

export default RegisterPage;