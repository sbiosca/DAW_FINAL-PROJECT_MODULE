import React, {useEffect, useState} from "react";
import "./HomeComponent.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Link} from 'react-router-dom'

const HomeComponent = (props) => {
    const dateNow = Date.now();
    const hoy = new Date(dateNow);
    const formatData = hoy.toISOString().slice(0, 10)
    var fechaFin = new Date(formatData).getTime();

    return (
        <div className="divHome">
                <div className="text-center">
                    <img className="img-fluid hover-zoom" src="/stadium_BIOS_FC.png" />
                    <img className="img-fluid hover-zoom" src="/stadium_BIOS_FC3.png" />
                    <img className="img-fluid hover-zoom" src="/stadium_BIOS_FC2.png" />
                </div>
            <h1 className="text-center p-3">Próximos partidos</h1>
            <div className="divPrincipalPartidos">
                {props.partidos?.map((data, index) => (
                    <div>
                        {
                            new Date(data.horario.slice(0, 10)).getTime()/(1000*60*60*24) - fechaFin/(1000*60*60*24) < 30
                            &&  new Date(data.horario.slice(0, 10)).getTime()/(1000*60*60*24) - fechaFin/(1000*60*60*24) > 0? 
                            <div className="divPartidosHome">
                                <h3>{data.id_competi.name}</h3>
                                <strong>{data.eq1}</strong>
                                <img src={data.img_partidos.split(":")[0]} style={{ width: "40px" }} />
                                <img src={data.img_partidos.split(":")[1]} style={{ width: "40px" }} />
                                <strong>{data.eq2}</strong>
                                <div>
                                    <strong>{data.horario.slice(11).split("Z")}</strong><p></p>
                                    <strong>{data.horario.slice(0, 10)}</strong>
                                </div>
                                
                                    <div>
                                        <Link to={"/entradas/" + data.id} className="btn_sold">
                                            <span>Comprar Entradas</span>
                                        </Link>
                                    </div>
                            </div>:
                            <p></p>
                        }
                    </div>
                ))}                
            </div>     
            <h1 className="text-center p-5">Integrantes:</h1>
            <Carousel showArrows={false} className="carouselStyle" >
                {props.integrantes?.map((data, index) => (
                    <div>
                        <Link to={"/integrantes"} className="nav-link">
                            <h3>{data.name} {data.apellidos}</h3>
                            {
                                data.tecnico != 1 ?
                                <strong>Cuerpo Tecnico</strong>:
                                <strong>Jugador</strong>
                            }
                        </Link>
                        <img src="https://api.dicebear.com/6.x/micah/svg?seed=Molly" style={{ width: "30%" }} />
                        <div>
                           
                        </div>
                    </div>
                ))}
                
            </Carousel>
        </div>
    )

}

export default HomeComponent