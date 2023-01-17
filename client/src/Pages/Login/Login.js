import React from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
// import swal from "sweetalert2";
import { setAuthToken } from "../../Helpers/setAuthToken";
import "./Login.css";

function Login() {
  const handleLogin = (values) => {

    const loginPayload = {
      email: values.email,
      password: values.password
    }

    axios.post("http://localhost:3001/login", loginPayload)
      .then(response => {

        const token = response.data.token;
        localStorage.setItem("token", token);
        setAuthToken(token);
        window.location.href = '/missoes'

      })
      .catch(err => console.log(err));
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>GAME ACADEMY</h1>
          <p>Aprenda a programar jogando! &#x1F4BB;&#x1F525;</p>
          <span>Não tem uma conta? &#x1F447;</span>
          <Link to="/cadastro">
            <button>Cadastrar</button>
          </Link>
        </div>

        <div className="right">
          <h1>LOGIN</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}
          >
            <Form>
              <Field name="email" type='email' className="form-field" placeholder="Email" />
              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
              <Field name="password" type='password' className="form-field" placeholder="Senha" />
              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
              <button type="submit">Login</button>
            </Form>
          </Formik>
        </div>
      </div>
      <footer className="footer">
        <p>Feito com &#128545; usando ReactJS</p>
      </footer>
    </div>
  );
}

export default Login;