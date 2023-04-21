import React from "react";
import FooterComponent from "../components/footer/FooterComponent"
import { useNavigate, useLocation } from "react-router-dom";


const FooterPage = () => {
    let location = useLocation();
    return (
        <div>
            {
                location.pathname.includes("dashboard") ?
                <div></div>:
                <FooterComponent />
            }
        </div>
    )

}

export default FooterPage