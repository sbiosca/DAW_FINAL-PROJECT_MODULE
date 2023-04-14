import React from "react";
import {Link} from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa"

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
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                
                <div>
                    <Link to={"/login"} className="nav-link">
                        <FaUserAlt style={{fontSize: "40px"}}/>
                    </Link>
                </div>
            </nav>
        </div>
    )

}

export default HeaderComponent