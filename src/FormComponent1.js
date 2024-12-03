import React, { useState } from "react";

const FormComponent1 = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const addField = (name, initialValue = "") => {
    setValues({ ...values, [name]: initialValue });
    setErrors({ ...errors, [name]: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues({});
    setErrors({});
  };

  const handleAddField = () => {
    addField("newField", "Default Value");
  };

  return (
    <div>
      {Object.keys(values).map((key) => (
        <div key={key}>
          <label>
            {key}:
            <input
              name={key}
              value={values[key]}
              onChange={handleChange}
            />
          </label>
          {errors[key] && <span>{errors[key]}</span>}
        </div>
      ))}
      <button onClick={handleAddField}>Add Field</button>
      <button onClick={resetForm}>Reset Form</button>
    </div>
  );
};

export default FormComponent1;
