import "./post.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { posts } from "../contexts/postContext";

export default function PostDetails() {
  const postData = useContext(posts);
  const { postId } = useParams();
  const numericPostId = Number(postId); // fix type issue

  const p = postData.find((post) => post.id === numericPostId); // cleaner

  if (!p) return <p>Post not found</p>; // in case of invalid ID

  return (
    <>
      <div className="postBorder" key={p.id}>
        <div className="theFlex">
          <img
            src="logo.png"
            style={{ width: "50px" }}
            alt="nothing"
            className="image"
          />
          <h4>{p.title}</h4>
        </div>
        <hr />
        <p className="parapost">{p.body}</p>
      </div>
    </>
  );
}
