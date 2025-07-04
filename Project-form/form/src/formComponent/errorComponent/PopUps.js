//import "../form.css";
import "./PopUps.css";

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
        {showModal && (
          <div /*style={overlay}*/ className="overlay">
            <div /*style={modal}*/ className="modal-animate" id="modal">
              {/* submission is ok */}
              {userAge && numberLength && (
                <>
                  <h2>Submission Successful</h2>
                  <p>Name: {userForm.name}</p>
                  <p>Number: {userForm.number}</p>
                  <p>Age: {userForm.age}</p>
                  <p>Salary: {userForm.salary}</p>
                  <p>Employee: {userForm.employee ? "Yes" : "No"}</p>
                </>
              )}
              {/* submission with age error */}
              {!userAge && (
                <>
                  <h2>Age Should respect the format</h2>
                  <p>
                    <b style={{ color: "red" }}>{" Problem: "}</b>
                    age: {userForm.age} {userForm.age < 18 ? "< 18" : "> 60"}{" "}
                  </p>
                </>
              )}
              {/* submission with number length error */}
              {!numberLength && (
                <>
                  <h2>Number Should respect the format</h2>
                  <p>
                    <b style={{ color: "red" }}>{" Problem: "}</b>
                    {userForm.number} {" of length= "}
                    {userForm.number.length}{" "}
                    {userForm.number.length < 8 ? "< 8" : "> 8"}{" "}
                  </p>
                </>
              )}
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
