import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Post from "./components/pages/Post";
import PostLayout from "./components/PostLayout";
import Layout from "./components/Layout";
import PostDetail from "./components/pages/PostDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='post' element={<PostLayout />}>
              <Route path=":category" element={<PostDetail />} />
              <Route index element={<Post />} /> 
              </Route>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<h1>Error 404 page not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
