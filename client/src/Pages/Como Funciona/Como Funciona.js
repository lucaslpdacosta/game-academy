import React from "react";
import { Link } from "react-router-dom";
import "./Como_Funciona.css";

function Como_Funciona() {
    return (
        <>
            <h1>COMO FUNCIONA</h1>
            <div className="darkbox">
                <iframe name="iframe1" id="iframe1" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&loop=1" frameborder="0" border="0"></iframe>
            </div>
            <Link to="/missoes">
                <button>COMECE JÁ!</button>
            </Link>
            <footer className="footer">
                <p>Feito com &#128545; usando ReactJS</p>
            </footer>
        </>
    );
}

export default Como_Funciona;