import { BrowserRouter, Routes, Route } from "react-router-dom";

// import all page screens

import Home from "./pages-screens/Home";
import Login from "./auth-screens/Login";
import Register from "./auth-screens/Register";
import TestAxios from "./test-screens/TestAxios";
import TestGetExercises from "./test-screens/TestGetExercises";
import Login2nd from "./auth/Login2nd";

export default function PageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {/* <Route path="/login" element={<Login></Login>}></Route> */}
          <Route path="/login" element={<Login2nd></Login2nd>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          {/* test routes */}
          <Route path="/test-post" element={<TestAxios></TestAxios>}></Route>
          <Route path="/test-get-exercises" element={<TestGetExercises></TestGetExercises>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
