import { useState } from "react";

const useForm = (validateForm, initialValues, validators) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateForm(values, validators))
  };

  return { handleChange, handleSubmit, errors };
};

export default useForm;
