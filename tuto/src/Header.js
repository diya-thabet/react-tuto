let name = "Dhia";
export default function Header() {
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

function btnClicked() {
  name = "yamen";
}
