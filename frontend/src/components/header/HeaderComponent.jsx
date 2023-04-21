import React from "react";
import './HeaderComponent.css'
import {Link} from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa"
import jwt_decode from "jwt-decode"

import {MdOutlineLogout} from 'react-icons/md'

const HeaderComponent = (props) => {
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning p-3">
                <Link to={""} className="nav-link">
                    <img src="logo.png" style={{width: "140px"}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={"/bios.fc"} className="nav-link">
                                <p>Equipo</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/shops"} className="nav-link">
                                <p>Shop</p>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Partidos
                            </a>
                            <div className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                {
                                    props.competicion?.map((data, index) => (
                                        <a className="dropdown-item" href="#">{data.name}</a>
                                    ))
                                }
                                <div className="dropdown-divider"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                {
                    props.isToken ?
                    <div>
                            <ul className="navbar-nav ">
                                <li className="nav-item dropdown logoProfile">
                                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img style={{width: "90px"}}  src={props.userData?.id_profile[0].avatar} />
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/profile">
                                                Profile
                                        </a>
                                        {
                                            props.isAdmin ? 
                                            <a className="dropdown-item" href="/dashboard">
                                                    Panel Dashboard
                                            </a>: 
                                            <a></a>
                                        }
                                        <a className="dropdown-item" onClick={() => props.isLogout()}>
                                            <MdOutlineLogout style={{fontSize: "20px"}}/>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                    </div>
                    :
                    <div>
                        <Link to={"/login"} className="nav-link">
                            <FaUserAlt style={{fontSize: "40px"}}/>
                        </Link>
                    </div>
                }
            </nav>
        </div>
    )

}

export default HeaderComponent