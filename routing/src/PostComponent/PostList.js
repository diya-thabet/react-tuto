import "./post.css";
import { Link } from "react-router-dom";

let posts = [
  {
    id: 0,
    title: "How begin a WW3",
    body: `begging a war is not easy for beginner , 
        in this tutorial we gonna teach you how to become the next hitler,
        the next tito, the next stalin, 
        Step 1: establish your dictatorship in peasents mind
        in a way you look like christ for them
        READMORE...
        `,
  },
  {
    id: 0,
    title: "How begin a WW3",
    body: `begging a war is not easy for beginner , 
        in this tutorial we gonna teach you how to become the next hitler,
        the next tito, the next stalin, 
        Step 1: establish your dictatorship in peasents mind
        in a way you look like christ for them
        READMORE...
        `,
  },
  {
    id: 0,
    title: "How begin a WW3",
    body: `begging a war is not easy for beginner , 
        in this tutorial we gonna teach you how to become the next hitler,
        the next tito, the next stalin, 
        Step 1: establish your dictatorship in peasents mind
        in a way you look like christ for them
        READMORE...
        `,
  },
];

export default function PostList() {
  const data = posts.map((post) => {
    return (
      <Link key={post.id}>
        <div className="postBorder">
          <div className="theFlex">
            <img
              src="logo.png"
              style={{ width: "50px" }}
              alt="nothing"
              className="image"
            />
            <h4> {post.title} </h4>
          </div>
        </div>
      </Link>
    );
  });
  return <>{data}</>;
}
