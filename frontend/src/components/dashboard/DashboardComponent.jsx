import React from "react";
import "./DashboardComponent.css"
import {Link} from 'react-router-dom'

import {MdOutlineLogout} from 'react-icons/md'
const DashboardComponent = (props) => {
    console.log(props)
    return (
        <div className="container-fluid">
				<div className="row">
					<nav className="col-md-2 d-none columnDashboard d-md-block sidebar">
						<div className="sidebar-sticky ">
							<ul className="nav flex-column">
								<li className="nav-item">
                                <Link to={"/"} className="nav-link">
                                    <img src="logo.png" style={{width: "140px"}}/>
                                </Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span data-feather="file"></span>
										Partidos
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span data-feather="users"></span>
										Usuarios
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span data-feather="bar-chart-2"></span>
										Entradas
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span data-feather="bar-chart-2"></span>
										Integrantes
									</a>
								</li>
								<div className="profileAdminUser">
									<a className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img style={{width: "90px"}}  src={"https://api.dicebear.com/6.x/micah/svg?seed=Molly"} />
                                        	<MdOutlineLogout style={{fontSize: "50px"}}/>
                                    </a>
								</div>
							</ul>
						</div>
					</nav>

					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
							<h1 className="h2">Panel Dashboard</h1>
					</main>
				</div>
			</div>
    )

}

export default DashboardComponent