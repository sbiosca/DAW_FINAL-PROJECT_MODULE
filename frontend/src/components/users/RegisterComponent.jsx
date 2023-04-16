import React, {useState} from "react";
import './Auth.css'
import {AiOutlineUserAdd, AiOutlineMail, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaAddressBook} from 'react-icons/fa'
import {RxAvatar} from 'react-icons/rx'
import {Link} from 'react-router-dom'

const RegisterComponent = (props) => {
    const [valueUsername, setUsername] = useState()
    const [valueEmail, setEmail] = useState()
    const [valueAvatar, setAvatar] = useState()
    const [valuePassword, setPassword] = useState()
    const [valuePassword2, setPassword2] = useState()
    const [valueSocio, setSocio] = useState()
    const [valueName, setName] = useState()
    const [valueAddres, setAddres] = useState()
    const [valueTelf, setTelf] = useState()
    const [errorUsername, setErrorUsername] = useState()
    const [errorEmail, setErrorEmail] = useState()
    const [errorAvatar, setErrorAvatar] = useState()
    const [errorPassword, setErrorPassword] = useState()
    const [errorPassword2, setErrorPassword2] = useState()
    const [errorSocio, setErrorSocio] = useState()
    const [errorName, setErrorName] = useState()
    const [errorAddres, setErrorAddres] = useState()
    const [errorTelf, setErrorTelf] = useState()
    const formRegister = {
        "username": valueUsername,
        "email": valueEmail,
        "avatar": valueAvatar,
        "name_complet": valueName,
        "passwd": valuePassword,
        "addres": valueAddres,
        "num_telf": valueTelf,
        "id_socio": valueSocio,
        "type": "test"
    }

    console.log(formRegister)
    const submitRegister = () => {
        if (!valueUsername) {
            setErrorUsername("*Username can't be blank. Please insert an username")
        }
        if (!valueName) {
            setErrorName("*Name can't be blank. Please insert a name")
        }else {
            setErrorName("")
        }
        if (!valueSocio) {
            setErrorSocio("*Socio id can't be blank. Please insert an socio")
        }else {
            setErrorSocio("")
        }
        if (!valueEmail) {
            setErrorEmail("*Email can't be blank. Please insert an email")
        }
        if (!valueAvatar) {
            setErrorAvatar("*Avatar can't be blank. Please insert an avatar")
        }else {
            setErrorAvatar("")
        }
        if (!valueAddres) {
            setErrorAddres("*Addres can't be blank. Please insert an addres")
        }else {
            setErrorAddres("")
        }
        if (!valueTelf) {
            setErrorTelf("*Telephone number can't be blank. Please insert an number")
        }else {
            setErrorTelf("")
        }
        if (!valuePassword) {
            setErrorPassword("*Password can't be blank. Please insert an password")
        }
        if (!valuePassword2) {
            setErrorPassword2("*Please confirm an password")
        }

        if (valueUsername.length >= 5 && valuePassword.length >= 6 && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(valueEmail) && valuePassword == valuePassword2) {
            console.log("NO HAY ERRORRES")
            setErrorPassword("")
            setErrorPassword2("")
            setErrorUsername("")
            setErrorEmail("")
            setErrorAvatar("")
            setErrorName("")
            setErrorSocio("")
            setErrorAddres("")
            setErrorTelf("")
            props.formData(formRegister) 
        }else {
            console.log("ERRORES")
        }

        if (valueUsername.length < 5) {
            setErrorUsername("*Username is not correct. Minium 5 characters")
        }else {
            setErrorUsername("")
        }

        if (valueTelf.length < 9 || valueTelf.length > 9) {
            setErrorTelf("*Number telephone is not correct.")
        }else {
            setErrorTelf("")
        }
       
        if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(valueEmail)) {
            console.log("email_invalid")
            setErrorEmail("*Email is not correct. Put a correct email format")
        }else {
            console.log("email_valid")
            setErrorEmail("")
        }

        if (valuePassword.length < 6) {
            setErrorPassword("*Password is not correct. Minium 6 characters")
        }else {
            setErrorPassword("")
        }

        if (valuePassword !== valuePassword2) {
            setErrorPassword2("*Two passwords aren't the same")
        }else {
            setErrorPassword2("")
        }
    }


    return (
        <div className="FormSign" style={{maxWidth: "510px"}}>
            <div className="logo">
                <img src="/logo.png" />
            </div>
            <div className="text-center mt-4 web">
                BIOSFC SIGN UP
            </div>
            <div className="p-2 mt-2">
                <div className="form-field d-flex align-items-center"> 
                    <AiOutlineUserAdd style={{fontSize: "40px"}}/>
                    <input onKeyUp={event => setUsername(event.target.value)} type={"text"} placeholder={"username"} />
                </div>
                <span className="text-danger">{errorUsername}</span><p></p>
                <div className="form-field d-flex align-items-center"> 
                    <AiOutlineMail style={{fontSize: "40px"}}/>
                    <input onKeyUp={event => setEmail(event.target.value)} type={"text"} placeholder={"email@email.com"} />
                </div>
                <span className="text-danger">{errorEmail}</span><p></p>
                <div className="form-field d-flex align-items-center"> 
                    <RxAvatar style={{fontSize: "40px"}}/>
                    <input onKeyUp={event => setAvatar(event.target.value)} type={"url"} placeholder={"avatar"} />
                </div>
                <span className="text-danger">{errorAvatar}</span><p></p>
                <div className="form-field d-flex align-items-center"> 
                    <AiOutlineUserAdd style={{fontSize: "40px"}}/>
                    <input onKeyUp={event => setName(event.target.value)} type={"url"} placeholder={"Joshua Kings Hals"} />
                </div>
                <span className="text-danger">{errorName}</span><p></p>
                <div className="form-field d-flex align-items-center"> 
                    <FaAddressBook style={{fontSize: "40px"}}/>
                    <input onKeyUp={event => setAddres(event.target.value)} type={"url"} placeholder={"C/Address n0 p0"} />
                </div>
                <span className="text-danger">{errorAddres}</span><p></p>
                <div className="form-field d-flex align-items-center"> 
                    <BsFillTelephoneFill style={{fontSize: "40px"}}/>
                    <input onKeyUp={event => setTelf(event.target.value)} type={"url"} placeholder={"000555222"} />
                </div>
                <span className="text-danger">{errorTelf}</span><p></p>
                <div className="form-field d-flex align-items-center"> 
                    <RiLockPasswordFill style={{fontSize: "40px"}}/>
                    {
                        props.eye ?
                        <input onKeyUp={event => setPassword(event.target.value)} type={"text"} placeholder={"password"} />:
                        <input onKeyUp={event => setPassword(event.target.value)} type={"password"} placeholder={"password"} />
                    }
                    {
                        props.eye ?
                        <AiFillEye onClick={() => props.viewEye(false)} style={{ fontSize: "40px" }} />:
                        <AiFillEyeInvisible onClick={() => props.viewEye(true)} style={{ fontSize: "40px" }} />
                    }
                </div>
                <span className="text-danger">{errorPassword}</span><p></p>        
                <div className="form-field d-flex align-items-center"> 
                    <RiLockPasswordFill style={{fontSize: "40px"}}/>
                    {
                        props.eye ?
                        <input onKeyUp={event => setPassword2(event.target.value)} type={"text"} placeholder={"confirm password"} />:
                        <input onKeyUp={event => setPassword2(event.target.value)} type={"password"} placeholder={"confirm password"} />
                    }
                    {
                        props.eye ?
                        <AiFillEye onClick={() => props.viewEye(false)} style={{ fontSize: "40px" }} />:
                        <AiFillEyeInvisible onClick={() => props.viewEye(true)} style={{ fontSize: "40px" }} />
                    }
                </div>
                <span>Inserte identificador de socio</span>
                <div className="form-field d-flex align-items-center"> 
                    <input onKeyUp={event => setSocio(event.target.value)} type={"number"} />
                </div>                
                <span className="text-danger">{errorPassword2}</span><p></p> 
                <button onClick={submitRegister} className="btn mt-3">Register</button>
            </div>
            <div className="text-center text-primary mt-4">
                <span>Do you have an account? </span><p></p>
                <Link to={"/login"} className="text-primary">Sign IN</Link>
            </div>
        </div>
    )
}

export default RegisterComponent;