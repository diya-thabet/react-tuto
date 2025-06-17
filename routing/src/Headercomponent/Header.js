import "./Header.css";
import { Link } from "react-router-dom";
import { posts } from "../contexts/postContext";

export default function Header() {
  return (
    <>
      <posts.Provider>
        <div className="header">
          <div className="header-brand">
            <img src="logo.png" className="header-logo" alt="Fennec Logo" />
            <h1 className="header-title">Fennec</h1>
          </div>
          <nav className="header-nav">
            <ul className="options">
              <li>
                <Link to="./" className="nav-link">
                  <button className="option">Home</button>
                </Link>
              </li>
              <li>
                <Link to="./hello" className="nav-link">
                  <button className="option">Hello</button>
                </Link>
              </li>
              <li>
                <Link to="./posts" className="nav-link">
                  <button className="option">Posts</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-divider"></div>
      </posts.Provider>
    </>
  );
}