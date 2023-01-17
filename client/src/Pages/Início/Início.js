import { Link } from "react-router-dom";
import "./Início.css";

function Início() {
  return (
    <>
      <div className="inicio">
        <div className="card">
          <div className="top">
            <h1>JÁ PENSOU EM APRENDER A PROGRAMAR AO MESMO TEMPO QUE JOGA E SE <span>DIVERTE</span>? &#129300;</h1>
          </div>
          <div className="bottom">
            <p>Com a Game Academy, você pode aprender de maneira dinâmica! Nossa plataforma garante também que sua progressão seja justa e que você aprenda no seu passo, independente do seu nível de conhecimento. Então, o que está esperando? Faça seu cadastro e aprenda se divertindo!</p>
          </div>
        </div>
        <Link to="/missoes">
          <button>COMECE JÁ!</button>
        </Link>
        <footer className="footer">
          <p>Feito com &#128545; usando ReactJS</p>
        </footer>
      </div>
    </>
  );
}

export default Início;