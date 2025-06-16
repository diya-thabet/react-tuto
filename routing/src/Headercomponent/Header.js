import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1>HEADER</h1>
        <div>
          <ul>
            <li>
              <button>home</button>
            </li>
            <li>
              <button>hello</button>
            </li>
            <li>
              <button>Posts</button>
            </li>
          </ul>
        </div>
        <hr></hr>
      </div>
    </>
  );
}
