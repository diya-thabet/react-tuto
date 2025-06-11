import "./form.css";
import { useState } from "react";

export default function Form() {
  const [userForm, setForm] = useState({
    name: "",
    number: "",
    age: "",
    salary: "",
    employee: false,
  });

  console.log(userForm);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function isDisabled() {
    const dhia = { ...userForm };
    if (
      dhia.name === "" ||
      dhia.number === "" ||
      dhia.age === "" ||
      dhia.salary === "" /*||
      dhia.employee === false*/
    )
      return true;
    return false;
  }

  function handleName(e) {
    setForm({ ...userForm, name: e.target.value });
    console.log(e.target.value);
  }

  function handleAge(e) {
    setForm({ ...userForm, age: e.target.value });
    console.log(e.target.value);
  }

  function handleSalary(e) {
    setForm({ ...userForm, salary: e.target.value });
    console.log(e.target.value);
  }

  function handleNumber(e) {
    setForm({ ...userForm, number: e.target.value });
    console.log(e.target.value);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" onChange={handleName} />
        <label htmlFor="number">number:</label>
        <input type="text" id="number" onChange={handleNumber} />
        <label htmlFor="age">age:</label>
        <input type="text" id="age" onChange={handleAge} />
        <label htmlFor="salary">salary:</label>
        <select id="salary" onChange={handleSalary}>
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="checkbox"
          onChange={(e) => {
            setForm({ ...userForm, employee: e.target.checked });
          }}
        />{" "}
        are you an employee?
        <button
          disabled={isDisabled()}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
