import "./post.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { posts } from "../contexts/postContext";

export default function PostDetails() {
  const postData = useContext(posts);
  const { postId } = useParams();
  const numericPostId = Number(postId); // fix type issue
  const p = postData.find((post) => post.id === numericPostId); // using higher order function "find" :)
  
  if (!p) {
    return (
      <div className="article-error-message">
        <p>Post with the id: <b>{postId}</b> not found</p>
      </div>
    );
  }
  
  return (
    <>
      <article className="article-container" key={p.id}>
        <header className="article-header">
          <h4 className="article-title">{p.title}</h4>
        </header>
        <div className="article-divider"></div>
        <div className="article-content">{p.body}</div>
      </article>
    </>
  );
}