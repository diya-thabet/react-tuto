import "./Header.css";
import { Link } from "react-router-dom";
import { posts } from "../contexts/postContext";

export default function Header() {
  return (
    <>
      <posts.Provider>
        <div className="header">
          <img src="logo.png" style={{ width: "50px" }} alt="nothing" />
          <h1>Fennec</h1>

          <ul className="options">
            <Link to="./">
              <button className="option">home</button>
            </Link>
            <Link to="./hello">
              <button className="option">hello</button>
            </Link>
            <Link to="./posts">
              <button className="option">Posts</button>
            </Link>
          </ul>

          <hr></hr>
        </div>
        <hr></hr>
      </posts.Provider>
    </>
  );
}
