import "./post.css";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { postId } = useParams();
  console.log("test nihaha");
  console.log(postId);
  return (
    <>
      <div className="postBorder" key={postId}>
        <div className="theFlex">
          <img
            src="logo.png"
            style={{ width: "50px" }}
            alt="nothing"
            className="image"
          />
          <h4> test </h4>
        </div>

        <hr></hr>
        <p className="parapost">test test test test test</p>
      </div>
    </>
  );
}
