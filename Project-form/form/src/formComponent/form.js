import "./form.css";
import { useState } from "react";

export default function Form() {
  //form useState
  const [userForm, setForm] = useState({
    name: "",
    number: "",
    age: "",
    salary: "",
    employee: false,
  });

  //pop up show useState
  const [showModal, setShowModal] = useState(false);

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
    <>
      <div className="form">
        <div className="titlePlusForm">
          <h1>Requesting a loan</h1>
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
                setShowModal(true);
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {showModal && (
          <div style={overlay}>
            <div style={modal} className="modal-animate">
              <h2>Submission Successful</h2>
              <p>Name: {userForm.name}</p>
              <p>Number: {userForm.number}</p>
              <p>Age: {userForm.age}</p>
              <p>Salary: {userForm.salary}</p>
              <p>Employee: {userForm.employee ? "Yes" : "No"}</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
};
