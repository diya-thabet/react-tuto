import { useState } from "react";

export default function Header() {
  console.log("render");
  const [name, setName] = useState("Dhia");
  function btnClicked() {
    if (name === "Dhia") setName("Yamen");
    else setName("Dhia");
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "teal",
          display: " flex",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          boxShadow: "0px 5px 13px rgba(0,0,0,4)",
        }}
      >
        <h1>{name}</h1>
      </div>

      <button onClick={btnClicked} slyle={{ padding: "100px" }}>
        {" "}
        click here
      </button>
    </>
  );
}
