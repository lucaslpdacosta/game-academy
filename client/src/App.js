import NavBar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Início from "./Pages/Início/Início";
import Missões from "./Pages/Missões/Missões";
import Como_Funciona from "./Pages/Como Funciona/Como Funciona";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Html_select from "./Pages/Missões/HTML/html";
import M01 from "./Pages/Missões/HTML/M-01/01";

import Css_select from "./Pages/Missões/CSS/css";

import Js_select from "./Pages/Missões/JS/js";

import PrivateRoutes from "./Utils/PrivateRoutes";
import Background from "./Components/Animated Background/Background";
// import Footer from "./Components/Footer/Footer";
import { history } from './Helpers/History';
import { setAuthToken } from './Helpers/setAuthToken';
import "./App.css";

function App() {

  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <>
      <Router history={history}>
        <NavBar />
        <Background />
        <div className="pages">
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Missões />} exact path="/missoes" />

              <Route element={<Html_select />} exact path="/missoes/html" />
              <Route element={<M01 />} exact path="/missoes/html/01" />

              <Route element={<Css_select />} exact path="/missoes/css" />

              <Route element={<Js_select />} exact path="/missoes/js" />

            </Route>
            <Route element={<Início />} exact path="/" />
            <Route element={<Como_Funciona />} path="/como_funciona" />
            <Route element={<Login />} path="/login" />
            <Route element={<Cadastro />} path="/cadastro" />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;