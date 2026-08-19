import { BrowserRouter, Route, Routes } from "react-router-dom";

import User_Layout from "./Layout/User/User_Layout";
import Home from "./Components/User/Home";
import About from "./Components/User/About";
import Contact from "./Components/User/Contact";
import Login from "./Components/Auth/Login";
import Treatments from "./Components/User/Treatments";
import Specialists from "./Components/User/Specialists";
import Pricing from "./Components/User/Pricing";
import Blog from "./Components/User/Blog";
import BlogSingle from "./Components/User/BlogSingle";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<User_Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="treatments" element={<Treatments />} />
          <Route path="specialists" element={<Specialists />} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="/blog/blogsingle" element={<BlogSingle/>} />
          <Route path="login" element={<Login />} />

          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

