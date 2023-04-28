import React, { useState } from "react";
import "./DashboardComponent.css"
import {Link} from 'react-router-dom'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import Button from 'react-bootstrap/Button';
import { usePartidos } from "../../hooks/usePartidos";

import {MdOutlineLogout} from 'react-icons/md'
const DashboardComponent = (props) => {
	const [selected, setSelected] = useState();
	const {deletePartidos} = usePartidos();
	let footer = <div>
		<h4>No hay Partidos Seleccionados </h4>
		<Link to={"/dashboard/add_partidos"} className="btn_sold">
			<span>Añadir Partido</span>
		</Link>
	</div>;
	for (let i=0; i < props.partidos?.length; i++) {
		if (selected) {
			let year = selected.getFullYear();
			let month = selected.getMonth() + 1;
			let day = selected.getDate();
			let formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
			
			if (formattedDate === props.partidos[i].horario.slice(0, 10)) {
				footer = <div>
							<strong>Día {format(selected, 'PP')} </strong><p></p>
							<strong>Partido:</strong>  
							<div className="divPartidosAdmin">
                                <h3>{props.partidos[i].id_competi.name}</h3>
                                <strong>{props.partidos[i].eq1}</strong>
                                <img src={props.partidos[i].img_partidos.split(":")[0]} style={{ width: "40px" }} />
                                <img src={props.partidos[i].img_partidos.split(":")[1]} style={{ width: "40px" }} />
                                <strong>{props.partidos[i].eq2}</strong>
                                <div>
                                    <strong>{props.partidos[i].horario.slice(11).split("Z")}</strong><p></p>
                                    <strong>{props.partidos[i].horario.slice(0, 10)}</strong>
                                </div><p></p>
								<Button variant="danger" onClick={() => deletePartidos(props.partidos[i].id)}>
									Delete
								</Button>&nbsp;
								<Button variant="primary disabled" >
									Add Result
								</Button>
                            </div>
						</div>;
			}
		}
	}

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
									<img style={{width: "90px"}}  src={props.users?.id_profile[0].avatar} />
                                        	<MdOutlineLogout style={{fontSize: "50px"}}/>
                                    </a>
								</div>
							</ul>
						</div>
					</nav>

					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 text-center">
							<h1 className="h2">Panel Dashboard</h1>
							<DayPicker mode="single"
									selected={selected}
									onSelect={setSelected}
									footer={footer}/>
							
					</main>
				</div>
			</div>
    )

}

export default DashboardComponent