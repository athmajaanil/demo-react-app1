import { useState } from "react";

// Custom hook for managing form state and validation
function useForm1(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Validate the field
    if (validate) {
      const error = validate(name, value);
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  // Reset form state
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  // Dynamically add a new field to the form
  const addField = (name, initialValue = "") => {
    setValues({ ...values, [name]: initialValue });
    setErrors({ ...errors, [name]: "" });
  };

  return {
    values,
    errors,
    handleChange,
    resetForm,
    addField, // Expose the addField function
  };
}

export default useForm1;
