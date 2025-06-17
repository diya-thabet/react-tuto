import "./hello.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"


export default function Hello() {
  return (
    <>
      <h1>Hello There :-)</h1>

      <Link to="/">
        <div className="gotohome" style={{ textDecoration: "none" }}>
          <h1 className="theh1" style={{ textDecoration: "none" }}>
            Ho to home page
          </h1>
        </div>
      </Link>

      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
