import "./Button.css";

export default function TagButton({ title, children, icons, key }) {
  if (title == null || title === "") return null;
  return (
    <div id={key}>
      <button className="tagButton">
        {" "}
        {title}
        <h4>{icons}</h4>
        <p>{children}</p>
      </button>
    </div>
  );
}
