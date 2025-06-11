import "./form.css";
import { useState } from "react";
import PopUps from "./errorComponent/PopUps";

export default function Form() {
  //form useState
  const [userForm, setForm] = useState({
    name: "",
    number: "",
    age: "",
    salary: "",
    employee: false,
  });

  const [userAge, setAge] = useState(false);

  //pop up show useState
  const [showModal, setShowModal] = useState(false);
  const [numberLength, setNumberLength] = useState(false);

  console.log(userForm);
  console.log(userAge);

  console.log(userForm.number.length);
  console.log(numberLength);

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
    const age = Number(e.target.value);
    setForm({ ...userForm, age: age });

    setAge(age <= 60 && age >= 18 && age !== null);
  }

  function handleSalary(e) {
    setForm({ ...userForm, salary: e.target.value });
    //console.log(e.target.value);
  }

  function handleNumber(e) {
    //const ee = e.target.value;
    setForm(() => {
      return { ...userForm, number: e.target.value };
    });
    setNumberLength(() => {
      return e.target.value.length === 8;
    });

    //console.log(e.target.value);
  }

  return (
    <>
      <div className="form">
        <div className="titlePlusForm">
          <h1>Requesting a loan</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">name:</label>
            <input
              type="text"
              id="name"
              placeholder="full name"
              onChange={handleName}
            />
            <label htmlFor="number">number:</label>
            <input
              type="text"
              id="number"
              onChange={(e) => {
                handleNumber(e);
              }}
              placeholder="phone number"
            />
            <label htmlFor="age">age:</label>
            <input
              type="number"
              id="age"
              onChange={handleAge}
              placeholder="age"
            />
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
            />
            {"are you an employee?"}
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
          <PopUps
            showModal={showModal}
            userAge={userAge}
            numberLength={numberLength}
            userForm={userForm}
            setShowModal={setShowModal}
          >
            {" "}
          </PopUps>
        </div>
      </div>
    </>
  );
}
