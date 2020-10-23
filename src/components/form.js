import React from "react";
import useForm from "../customHooks/useForm";
import validateForm from "../utils/validateForm";

const Formulario = (props) => {
  const { handleChange, handleSubmit, errors } = useForm(validateForm, props.initialValues, props.validators);
  
  const fieldHTML = props.fields.map((field) => (
    <div className="form-group">
      <label htmlFor={field.name}>{field.name}</label>
      <input type={field.type} name={field.name} className="form-control" id={field.name} />
    </div>
  ));

  return (
    <div className="container-fluid">
      <div className="row justify-content-center p-md-5">
        <h1>
          <span className="badge badge-pill badge-primary">Formulario reutilizable</span>
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div>
            <form onSubmit={handleSubmit}>
              {fieldHTML}
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
