import React from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import "./Cadastro.css";

function Cadastro() {
  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      email: values.email,
      password: values.password,
    }).then((response) => {
      swal.fire({
        title: "CADASTRO",
        text: (response.data.msg),
        icon: "warning",
        iconColor: '#6E38A1',
        timer: 2500,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(okay => {
        if (okay) {
          window.location.reload();
        }
      });

    });
  };


  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

  return (
    <div className="cadastro">
      <div className="card">
        <div className="left">
          <h1>GAME ACADEMY</h1>
          <p>Venha estudar de maneira mais intuitiva! &#x1F680;</p>
          <span>Já tem uma conta? &#x1F447;</span>
          {
            <Link to="/login">
              <button>Login</button>
            </Link>}
        </div>
        <div className="right">
          <h1>CADASTRO</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleRegister}
            validationSchema={validationsRegister}
          >
            <Form>
              <Field name="nome" type="text" className="form-field" placeholder="Nome Completo" />
              <Field name="email" type="email" className="form-field" placeholder="Email" />
              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
              <Field name="password" type="password" className="form-field" placeholder="Senha" />
              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
              <Field name="confirmation" type="password" className="form-field" placeholder="Confirme sua senha" />
              <ErrorMessage
                component="span"
                name="confirmation"
                className="form-error"
              />
              <button className="button" type="submit">Cadastrar</button>
            </Form>
          </Formik>
        </div>
      </div>
      <footer className="footer">
        <p>Feito com &#128545; usando ReactJS</p>
      </footer>
    </div>
  );
};

export default Cadastro;