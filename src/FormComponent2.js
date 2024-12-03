import React from "react";
import useForm1 from "./useForm1";

// Validation logic
const validate = (name, value) => {
  switch (name) {
    case "name":
      return value.trim() === "" ? "Name is required" : "";
    case "email":
      return !/\S+@\S+\.\S+/.test(value) ? "Invalid email address" : "";
    case "password":
      return value.length < 6 ? "Password must be at least 6 characters" : "";
    case "phone":
      return !/^\d{10}$/.test(value) ? "Phone number must be 10 digits" : "";
    default:
      return "";
  }
};

function FormComponent2() {
  const { values, errors, handleChange, resetForm, addField } = useForm1(
    { name: "", email: "", password: "" },
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.values(errors).some((error) => error) ||
      Object.values(values).some((value) => value === "")
    ) {
      alert("Please fix errors before submitting.");
    } else {
      alert("Form submitted successfully!");
      console.log("Submitted Values:", values);
      resetForm();
    }
  };

  const handleAddPhoneField = () => {
    addField("phone");
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

      {/* Button to add phone field */}
      <button type="button" onClick={handleAddPhoneField}>
        Add Phone Field
      </button>

      {/* Phone Field (only visible if added) */}
      {values.phone !== undefined && (
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent2;
