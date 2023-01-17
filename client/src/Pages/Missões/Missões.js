import "./Missões.css"
import { Link } from "react-router-dom";

function Missões() {

    return (
        <div className="content">
            <div className="ih">
                <h1>SELECIONE UM MÓDULO &#128126;</h1>

                <Link to="/missoes/html">
                    <figure className="figure-html">
                        <figcaption className="figcaption-html">
                            <h3> HTML BÁSICO </h3>
                        </figcaption>
                    </figure>
                </Link>

                <Link to="/missoes/css">
                    <figure className="figure-css">
                        <figcaption className="figcaption-css">
                            <h3> CSS BÁSICO </h3>
                        </figcaption>
                    </figure>
                </Link>

                <Link to="/missoes/js">
                    <figure className="figure-js">
                        <figcaption className="figcaption-js">
                            <h3> JAVASCRIPT BÁSICO </h3>
                        </figcaption>
                    </figure>
                </Link>
            </div>

            <Link to="/">
                <button className="botao">VOLTAR</button>
            </Link>

            <footer className="footer">
                <p>Feito com &#128545; usando ReactJS</p>
            </footer>
        </div>
    );
}



export default Missões;

/*    return <div className="box">
        Olá (), &#128075;
    </div>*/