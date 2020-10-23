import React from "react";
import ReactDOM from "react-dom";
import ReusableForm from "./components/ReusableForm";
import "bootstrap/dist/css/bootstrap.css";

const formBuilder = [
  { type: "text", name: "Universidad", placeholder: "Universidad", value: "", validators: { required: true, minLength: 5, maxLength: 10 } },
  { type: "text", name: "Facultad", placeholder: "Facultad", value: "", validators: { required: true, minLength: 5 } },
  { type: "text", name: "Departamento", placeholder: "Departamento", value: "", validators: { required: true, minLength: 5 } },
];

ReactDOM.render(<ReusableForm formBuilder={formBuilder} />, document.getElementById("root"));
