import React from "react";
import FooterComponent from "../components/footer/FooterComponent"
import { useNavigate, useLocation } from "react-router-dom";


const FooterPage = () => {
    let location = useLocation();
    return (
        <div>
            {
                location.pathname.includes("dashboard") || location.pathname.includes("login")
                || location.pathname.includes("register") ?
                <div></div>:
                <FooterComponent />
            }
        </div>
    )

}

export default FooterPage