import "./App.css";
import Header from "./Headercomponent/Header";
import { Route, Routes } from "react-router-dom";
import Hello from "./HelloComponent/Hello";
import Home from "./HelloComponent/Home";
import PostList from "./PostComponent/PostList";
import PostDetails from "./postDetails/postDetails";
import ErrorNotFound from "./NotFoundComponent/ErrorNotFound";
import Dhia from "./DhiaComponent/Dhia";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* Routes */}

      <Routes>
        <Route path="/hello" element={<Hello />} >
          <Route path="dhia" element={<Dhia/>} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />

        <Route path="/postDetails/:postId" element={<PostDetails />} />
        <Route path="*" element={ <ErrorNotFound/> } />
      </Routes>
    </div>
  );
}

export default App;
