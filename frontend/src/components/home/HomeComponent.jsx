import React from "react";
import "./HomeComponent.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeComponent = () => {
    return (
        <div className="divHome">
            <Carousel showArrows={true} className="carouselStyle">
                <div>
                    <img className="img-fluid" src="https://www.bbva.com/wp-content/uploads/2015/12/Big-Data-Futbol-Innovacion-Tecnologia-Analisis-bbva-1024x622.jpg" />
                </div>
                <div>
                    <img className="img-fluid" src="https://www.bbva.com/wp-content/uploads/2015/12/Big-Data-Futbol-Innovacion-Tecnologia-Analisis-bbva-1024x622.jpg" />
                </div>
                <div>
                    <img className="img-fluid" src="https://www.bbva.com/wp-content/uploads/2015/12/Big-Data-Futbol-Innovacion-Tecnologia-Analisis-bbva-1024x622.jpg" />
                </div>
            </Carousel>
            <h1 className="text-center p-3">Próximos partidos</h1>
            <div className="p-5 divPrincipalPartidos">
                <div className="divPartidosHome">
                    <img className="imgPartidos" src="https://www.bbva.com/wp-content/uploads/2015/12/Big-Data-Futbol-Innovacion-Tecnologia-Analisis-bbva-1024x622.jpg" />
                    <img className="imgPartidos" src="https://www.bbva.com/wp-content/uploads/2015/12/Big-Data-Futbol-Innovacion-Tecnologia-Analisis-bbva-1024x622.jpg" />
                </div>
                <div className="divPartidosHome">
                    <img className="imgPartidos" src="https://www.bbva.com/wp-content/uploads/2015/12/Big-Data-Futbol-Innovacion-Tecnologia-Analisis-bbva-1024x622.jpg" />
                </div>
                <div className="divPartidosHome">
                    <img className="imgPartidos" src="https://www.bbva.com/wp-content/uploads/2015/12/Big-Data-Futbol-Innovacion-Tecnologia-Analisis-bbva-1024x622.jpg" />
                </div>
                {/* <PartidoComponent /> */}
            </div>
            <h1 className="text-center p-5">Jugadores</h1>
        </div>
    )

}

export default HomeComponent