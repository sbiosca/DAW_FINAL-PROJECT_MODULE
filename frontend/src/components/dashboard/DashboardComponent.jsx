import React, { useState } from "react";
import "./DashboardComponent.css"
import {Link} from 'react-router-dom'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import Button from 'react-bootstrap/Button';
import { usePartidos } from "../../hooks/usePartidos";
import {MdOutlineLogout} from 'react-icons/md';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import AddPartidos from '../../components/dashboard/AddPartidosDashboard';

import {AiFillCheckCircle} from "react-icons/ai"
import {RiQuestionAnswerFill} from "react-icons/ri"
import {MdCancel, MdSend} from "react-icons/md"


ChartJS.register(ArcElement, Tooltip, Legend);


const DashboardComponent = (props) => {
	console.log(props.integrantes)
	const test = {
		labels: ['No Disponibles', 'Disponibles', 'Definir'],
        datasets: [
          {
            label: '',
            data: [3,43,23],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
            },
          ],
	}
	const [selected, setSelected] = useState();
	const [viewCalendar, setViewCalendar] = useState(false);
	const [viewUsers, setViewUsers] = useState(false);
	const [viewEntradas, setViewEntradas] = useState(false);
	const [viewIntegrantes, setViewIntegrantes] = useState(false);
	const [viewAddPartido, setViewAddPartido] = useState(false);
	const [viewAnswer, SetView] = useState(false)
    const [idAnswer, SetId] = useState()
	const {deletePartidos} = usePartidos();
	let formattedDate;
	let footer = <div>
		<h4>No hay Partidos Seleccionados </h4>
		<Button className="btn_sold">
			<span onClick={()=> [setViewCalendar(false), setViewAddPartido(true)]}>Añadir Partido</span>
		</Button>
	</div>;
	for (let i=0; i < props.partidos?.length; i++) {
		if (selected) {
			let year = selected.getFullYear();
			let month = selected.getMonth() + 1;
			let day = selected.getDate();
			formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
			
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
                                    <img src="/logo.png" style={{width: "140px"}}/>
                                </Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" onClick={()=> [setViewUsers(false), setViewCalendar(true), setViewEntradas(false),
																				setViewIntegrantes(false), setViewAddPartido(false)]}>
										<span data-feather="file"></span>
										Calendario Partidos
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" onClick={()=> [setViewUsers(true), setViewCalendar(false), setViewEntradas(false),
																				setViewIntegrantes(false)]} >
										<span data-feather="file"></span>
										Usuarios
									</a>
									
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#" onClick={()=> [setViewUsers(false), setViewCalendar(false), setViewEntradas(true),
																				setViewIntegrantes(false)]}>
										<span data-feather="bar-chart-2"></span>
										Entradas
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#"  onClick={()=> [setViewUsers(false), setViewCalendar(false), setViewEntradas(false),
																				setViewIntegrantes(true)]}>
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
						<div>
							<Doughnut className="stadistics w-25 h-25 m-5" data={test} />
						</div>
						<div>
							{/* <Pie className="stadistics w-25 h-25 m-5" data={test}/> */}
						</div>
						{
							viewCalendar ?
							<DayPicker mode="single"
							selected={selected}
							onSelect={setSelected}
							footer={footer}/>:
							<div></div>
						}
						{
							viewAddPartido ?
							<AddPartidos formattedDate={formattedDate}/>:
							<div></div>
						}
						{
							viewUsers ?
							<div>
								<h1>Users</h1>
								<table className="table table-striped p-3 table-bordered table-hover table-responsive tbl-header">
									<thead className="thead-dark">
										<tr>
											<th scope="col" className="user_id">User_Id</th>
											<th scope="col" className="user">Username</th>
											<th scope="col" className="admin">Admin</th>
										</tr>
									</thead>
									<tbody>
										{props.usersAll?.map((data, index) => (
											<tr>
												<td scope="row" className="user_id">{data.id}</td>
												<td className="user">{data.username} </td>
												<td className="admin">{data.admin ? <input type="checkbox" checked/>: <input type="checkbox"/>}</td>
											</tr>
										))}
									</tbody>
								</table>
								</div>:
							<div></div>
						}
						{
							viewEntradas ?
							<div>
								<h1>Entradas</h1>
								<table className="table table-striped p-3 table-bordered table-hover table-responsive tbl-header">
									<thead className="thead-dark">
										<tr>
											<th scope="col" className="entrada_id">Entrada_id</th>
											<th scope="col" className="partido">Partido_id</th>
											<th scope="col" className="asiento">Asiento</th>
											<th scope="col" className="fila">fila</th>
											<th scope="col" className="graderia">Graderia</th>
											<th scope="col" className="precio">Precio</th>
											<th scope="col" className="disponible">Disponible</th>
											<th scope="col" className="operations">Operations</th>
										</tr>
									</thead>
									<tbody>
										{props.entradas?.map((data, index) => (
											<tr>
												<td scope="row" className="entrada_id" title={data.partido_id.eq1 +" VS "+data.partido_id.eq2}>{data.id}</td>
												<td className="partido">{data.partido_id.id} </td>
												<td className="asiento">{data.asiento} </td>
												<td className="fila">{data.fila} </td>
												<td className="graderia">{data.graderia} </td>
												<td className="precio">{data.precio} €</td>
												<td className="disponible">{data.disponible ? <input type="checkbox" checked/>: <input type="checkbox" disabled/>}</td>
												<td className="operations">
													<div>
														Edit
														Delete
													</div>
												</td>
											</tr>
										))}
										<p>Add Entrada</p>
										{/* <tr>
											<td>
												<input type="text"/>
											</td>
											<td>
												<input type="text"/>
											</td>
											<td>
												<input type="text"/>
											</td>
											<td>
												<input type="text"/>
											</td>
											<td>
												<input type="text"/>
											</td>
											<td>
												<input type="text"/>
											</td>
											<td>
												<input type="text"/>
											</td>
											<td>
												<input type="text"/>
											</td>
										</tr> */}
									</tbody>
								</table>
								</div>:
							<div></div>
						}
						{
							viewIntegrantes ?
							<div>
								<h1>Jugadores y Cuerpo Técnico</h1>
								<table className="table table-striped p-3 table-bordered table-hover table-responsive tbl-header">
									<thead className="thead-dark">
										<tr>
											<th scope="col" className="integrante_id">Id</th>
											<th scope="col" className="name">Name</th>
											<th scope="col" className="fech_naci">Fecha Nacimiento</th>
											<th scope="col" className="naci">Nacionalidad</th>
											<th scope="col" className="type">Type</th>
											<th scope="col" className="dorsal">Dorsal</th>
											<th scope="col" className="tarjetas_amar">Tarjetas Amarillas</th>
											<th scope="col" className="tarjetas_roj">Tarjetas Rojas</th>
											<th scope="col" className="goles">Goles</th>
											<th scope="col" className="lesionado">Lesionado</th>
											<th scope="col" className="operations">Operations</th>
										</tr>
									</thead>
									<tbody>
										{props.integrantes?.map((data, index) => (
											<tr>
												<td scope="row" className="integrante_id">
												{data.id}
													{/* <input type="text" id="integrante_id" name="integrante_id" value={data.id}/> */}
												</td>
												<td className="nameTd">
													<div className="textTd">
														{data.name} {data.apellidos}
													</div>
													<div className="imgTd">
														<img src="http://eskipaper.com/images/images-4.jpg" height='100%' width='100%' />
													</div>
												</td>
												<td className="fech_naci">{data.fech_naci}</td>
												<td className="naci">{data.nacionalidad}</td>
												<td className="type">
													{
														data.id_tecn.id == 0 ?
														"Jugador":
														"Cuerpo tecnico"
													}
												</td>
												<td className="dorsal">
													{
														viewAnswer &&  idAnswer == data.id ?
														<input type="text" id="integrante_id" name="integrante_id" defaultValue={data.id_player.dorsal}/>:
														<div>
															{data.id_player.dorsal}
														</div>
													}
												</td>
												<td className="tarjetas_amar">{data.id_player.tarjetas_amar}</td>
												<td className="tarjetas_roj">{data.id_player.tarjetas_roj}</td>
												<td className="goles">{data.id_player.goles}</td>
												<td className="lesionado">{data.id_player.lesionado ? <input type="checkbox" checked/>: <input type="checkbox" disabled/>}</td>
												<td>
													{
														viewAnswer && idAnswer == data.id ?
															<RiQuestionAnswerFill onClick={() => [SetView(false), SetId(data.id)]} style={{ fontSize: "60px" }} className="btn btn-click" /> :
															<RiQuestionAnswerFill onClick={() => [SetView(true), SetId(data.id)]} style={{ fontSize: "60px" }} className="btn btn-click text-primary" />
													}
													<MdSend style={{ fontSize: "60px" }} className="btn btn-click text-primary" />
													<MdCancel style={{ fontSize: "60px" }} className="btn btn-click text-danger" />
												</td>
											</tr>
										))}
									</tbody>
								</table>
								</div>:
							<div></div>
						}
					</main>
				</div>
			</div>
    )

}

export default DashboardComponent