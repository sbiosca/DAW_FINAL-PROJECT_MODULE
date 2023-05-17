import React from "react";
import './MapBoxComponent.css';
import mapboxgl from 'mapbox-gl';
import {Map, Marker} from 'react-map-gl';
import secret from "../../secret"
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from '@sweetalert/with-react'

const MapBoxComponent = (props) => {
    mapboxgl.accessToken = secret.secret;
    const infor = (value) => {
        if (value.name === "Bios FC") {
            swal(
                <div>
                    <img src="logo.png" style={{width: "40%"}}/>
                    <h1>{value.name}</h1>
                    <p>Stadium: </p>
                    <img src="stadium_BIOS_FC.png" style={{width: "40%"}}/>
                    <img src="stadium_BIOS_FC3.png" style={{width: "40%"}}/>
                </div>
            )
        }else {
            swal(
                <div>
                    <img src="logo.png" style={{width: "40%"}}/>
                    <h1>{value.name}</h1>
                    <p>Tienda: </p>
                    <img src={value.img} style={{width: "100%"}}/>
                </div>
            )
        }
    }
    return (
    <div className="map-container" >
        <Map
            initialViewState={{
                longitude: -0.6052881,
                latitude: 38.8234127,
                zoom: 12
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
        >
            {props.data?.map((data, index) => (
                <Marker longitude={data.long} latitude={data.lat} anchor={"bottom"} color={"red"} onClick={() => infor(data)}/>
            ))}
        </Map>
    </div>
    )

};

export default MapBoxComponent