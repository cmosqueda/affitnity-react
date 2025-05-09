import { BrowserRouter, Routes, Route } from "react-router-dom";

// import all page screens

// import HomeDummy from "./pages-screens/HomeDummy";
import LoginDummy from "./auth-screens/LoginDummy";
import RegisterDummy from "./auth-screens/RegisterDummy";
import TestAxios from "./test-screens/TestAxios";
import TestGetExercises from "./test-screens/TestGetExercises";
// import Login2nd from "./auth/Login2nd";
import Login from "./auth-screens/Login";
import Home from "./pages-screens/Home";

export default function PageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<LoginDummy></LoginDummy>}></Route>
          <Route path="/login-v2" element={<Login></Login>}></Route>
          <Route path="/register" element={<RegisterDummy></RegisterDummy>}></Route>

          {/* test routes */}
          <Route path="/test-post" element={<TestAxios></TestAxios>}></Route>
          <Route path="/test-get-exercises" element={<TestGetExercises></TestGetExercises>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
