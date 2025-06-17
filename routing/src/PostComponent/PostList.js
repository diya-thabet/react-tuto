import "./post.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { posts } from "../contexts/postContext";

export default function PostList() {
  const postData = useContext(posts);
  const data = postData.map((post) => {
    return (
      <Link key={post.id} to={`/postDetails/${post.id}`}>
        <div className="postBorderr">
          <div className="theFlex">
            {/* <img
              src="logo.png"
              className="image"
              alt="Post thumbnail"
            /> */}
            <h4>{post.title}</h4>
          </div>
        </div>
      </Link>
    );
  });
  
  return (
    <div className="posts-container">
      {data}
    </div>
  );
}