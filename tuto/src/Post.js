export default function Post({ title, content, children, key }) {
  return (
    <div
      id={key}
      style={{
        padding: "10px",
        border: "solid teal 5px",
        margin: "25px",
      }}
    >
      <h2>{title}</h2>
      <hr />
      <p>{content} </p>
      <p>child {children}</p>
    </div>
  );
}
