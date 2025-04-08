import { BrowserRouter, Routes, Route } from "react-router-dom";

// import all page screens

import Home from "./pages-screens/Home";
import Login from "./auth-screens/Login";
import Register from "./auth-screens/Register";

export default function PageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
