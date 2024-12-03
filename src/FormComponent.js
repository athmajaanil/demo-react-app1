import React from "react";
import useForm from "./useForm";

// Validation logic
const validate = (name, value) => {
  switch (name) {
    case "name":
      return value.trim() === "" ? "Name is required" : "";
    case "email":
      return !/\S+@\S+\.\S+/.test(value) ? "Invalid email address" : "";
    case "password":
      return value.length < 6 ? "Password must be at least 6 characters" : "";
    default:
      return "";
  }
};

function FormComponent() {
  const { values, errors, handleChange, resetForm } = useForm(
    { name: "", email: "", password: "" },
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error) || 
        Object.values(values).some((value) => value === "")) {
      alert("Please fix errors before submitting.");
    } else {
      alert("Form submitted successfully!");
      console.log("Submitted Values:", values);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;