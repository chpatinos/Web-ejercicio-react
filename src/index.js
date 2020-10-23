import React from "react";
import ReactDOM from "react-dom";
import Formulario from "./components/form";
import "bootstrap/dist/css/bootstrap.css";

const fields = [
  { type: "text", name: "Nombre", placeholder: "Nombre" },
  { type: "text", name: "Apellido", placeholder: "Apellido" },
  { type: "email", name: "Correo", placeholder: "Correo" },
];

const initialValues = { Nombre: "", Apellido: "", Correo: "" };

const validators = [
  { name: "Nombre", required: true, minLength: 5, maxLength: 20 },
  { name: "Apellido", required: true, minLength: 5, maxLength: 20 },
  { name: "Correo", required: true, minLength: 5, maxLength: 20 },
];;

ReactDOM.render(<Formulario fields={fields} initialValues={initialValues} validators={validators} />, document.getElementById("root"));
