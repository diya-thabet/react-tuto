import "../form.css";

export default function PopUps({
  showModal,
  userAge,
  numberLength,
  userForm,
  setShowModal,
}) {
  return (
    <>
      <div>
        {(showModal && userAge && numberLength && (
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
        )) ||
          (!userAge && showModal && numberLength && (
            <div style={overlay}>
              <div style={modal} className="modal-animate">
                <h2>Age Should respect the format</h2>
                <p>
                  <b style={{ color: "red" }}>{" Problem: "}</b>
                  age: {userForm.age} {userForm.age < 18 ? "< 18" : "> 60"}{" "}
                </p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )) ||
          (!numberLength && showModal && (
            <div style={overlay}>
              <div style={modal} className="modal-animate">
                <h2>Number Should respect the format</h2>
                <p>
                  <b style={{ color: "red" }}>{" Problem: "}</b>
                  {userForm.number} {" of length= "}
                  {userForm.number.length}{" "}
                  {userForm.number.length < 8 ? "< 8" : "> 8"}{" "}
                </p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          ))}
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
  color: "black",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
};
