import { useState } from "react";

// Custom hook for managing form state and validation
function useForm(initialValues, validate) {
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

  return {
    values,
    errors,
    handleChange,
    resetForm,
  };
}

export default useForm;
