import React from "react";
import "./js.css"
import { Link } from "react-router-dom";

function Js_select() {

    return (
        <div className="container">
            <h1>ESCOLHA UMA MISSÃO &#128526;</h1>
            <h2>&#128071;</h2>
            <div className="grid-missoes">
                <Link to="/missoes/js/01">
                    <div class="grid-item-js">M-01
                        <p>&#11088;</p>
                    </div>
                </Link>
                <div class="grid-item-js">M-02
                    <p>&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-03
                    <p>&#11088;&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-04
                    <p>&#11088;</p>
                </div>
                <div class="grid-item-js">M-05
                    <p>&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-06
                    <p>&#11088;&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-07
                    <p>&#11088;</p>
                </div>
                <div class="grid-item-js">M-08
                    <p>&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-09
                    <p>&#11088;&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-10
                    <p>&#11088;</p>
                </div>
                <div class="grid-item-js">M-11
                    <p>&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-12
                    <p>&#11088;&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-13
                    <p>&#11088;</p>
                </div>
                <div class="grid-item-js">M-14
                    <p>&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-15
                    <p>&#11088;&#11088;&#11088;</p></div>
                <div class="grid-item-js">M-16
                    <p>&#11088;</p>
                </div>
                <div class="grid-item-js">M-17
                    <p>&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-18
                    <p>&#11088;&#11088;&#11088;</p>
                </div>
                <div class="grid-item-js">M-19
                    <p>&#11088;</p>
                </div>
                <div class="grid-item-js">M-20
                    <p>&#11088;&#11088;</p></div>
            </div>

            <h3>PONTOS ACUMULADOS: ? DE <span className="span-js">?</span> </h3>
            

            <Link to="/missoes">
                <button>VOLTAR</button>
            </Link>
            <footer className="footer">
                <p>Feito com &#128545; usando ReactJS</p>
            </footer>
        </div>
    );
}

export default Js_select;