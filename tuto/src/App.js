import "./App.css";
import Header from "./Header.js";
import Post from "./Post.js";
import SideMenu from "./SideMenu.js";

export default function App() {
  const text = "هذا مقال عن شيء معين في حدود معرفة معينة";

  const listPosts = [
    { id: 1, title: "الامير", content: text, child: <>🏛️🏛️🏛️</> },
    { id: 2, title: "فنون الحرب", content: text, child: <>📰📰📰</> },
    {
      id: 3,
      title: "تاريخ البشر على الارض",
      content: text,
      child: <>☎️☎️☎️</>,
    },
  ];

  const listPostMapped = listPosts.map((post) => {
    return (
      <Post key={post.id} title={post.title} content={post.content}>
        {" "}
        {post.child}{" "}
      </Post>
    );
  });

  return (
    <div className="App">
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* post a,d side menu container */}
        <div
          style={{
            display: "flex",
            width: "60%",
          }}
        >
          {/* POSTS Container */}
          <div
            style={{
              width: "50%",
            }}
          >
            {listPostMapped}
          </div>
          {/* == post container end == */}

          <div
            style={{
              width: "30%",
            }}
          >
            {/* Side Menu CONTAINER */}
            <SideMenu />
            {/* == side menu CONTAINER == */}
          </div>
        </div>
        {/*== post a,d side menu container ==*/}
      </div>
    </div>
  );
}
