import React from "react";
import './MapBoxComponent.css';
import mapboxgl from 'mapbox-gl';
import {Map, Marker} from 'react-map-gl';
import secret from "../../secret"
import 'bootstrap/dist/css/bootstrap.min.css';

const MapBoxComponent = (props) => {
    mapboxgl.accessToken = secret.secret;
    console.log(props)
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
                <Marker longitude={data.long} latitude={data.lat} anchor={"bottom"} color={"red"}/>
            ))}
        </Map>
    </div>
    )

};

export default MapBoxComponent