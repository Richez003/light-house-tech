import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Landing from "../Components/Landing/Landing";
import Blog3 from "../Components/Blog/Blog3";
import Blog2 from "../Components/Blog/Blog1";
import Blog1 from "../Components/Blog/Blog2";
import Blog4 from "../Components/Blog/Blog4";
import Header from "../Components/Header/Header";
import Blog5 from "../Components/Blog/Blog5";
import Blog6 from "../Components/Blog/Blog6";
import Blog7 from "../Components/Blog/Blog7";
import Blog8 from "../Components/Blog/Blog8";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path = "/" element={<Landing/>}/>
        <Route path="residencies/blog/1" element={<Blog />} />
        <Route path="residencies/blog/2" element={<Blog1 />} />
        <Route path="residencies/blog/3" element={<Blog2 />} />
        <Route path="residencies/blog/4" element={<Blog3 />} />
        <Route path="residencies/blog/5" element={<Blog4 />} />
        <Route path="residencies/blog/6" element={<Blog5 />} />
        <Route path="residencies/blog/7" element={<Blog6 />} />
        <Route path="residencies/blog/8" element={<Blog7 />} />
        <Route path="residencies/blog/9" element={<Blog8 />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
