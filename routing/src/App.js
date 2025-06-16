import "./App.css";
import Header from "./Headercomponent/Header";
import { Route, Routes } from "react-router-dom";
import Hello from "./HelloComponent/Hello";
import Home from "./HelloComponent/Home";
import PostList from "./PostComponent/PostList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* Routes */}

      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;
