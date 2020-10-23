import { useState } from "react";

const useReusableForm = (validateReusableForm, props) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(props);

  const handleChange = (evt) => {
    values.forEach((item, index) => {
      if (item.name === evt.target.name) values[index].value = evt.target.value;
    });
    setValues(values);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateReusableForm(values));
    if (Object.keys(validateReusableForm(values)).length === 0) {
      alert("Datos enviados correctamente");
    }
  };

  return { handleChange, handleSubmit, errors };
};

export default useReusableForm;
