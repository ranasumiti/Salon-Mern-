import { BrowserRouter, Route, Routes } from "react-router-dom";

import User_Layout from "./Layout/User/User_Layout";
import Home from "./Components/User/Home";
import About from "./Components/User/About";
import Contact from "./Components/User/Contact";
import login from "./Components/User/Login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<User_Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>}/>
<Route path="login" element={<login/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

