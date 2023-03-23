import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeComponent = () => {
    return (
        <div>
            <h1>HOME</h1>
            <Carousel>
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
        </div>
    )

}

export default HomeComponent