import { BrowserRouter, Routes, Route } from "react-router-dom";

// import all page screens

// import HomeDummy from "./pages-screens/HomeDummy";
import LoginDummy from "./auth-screens/LoginDummy";
import RegisterDummy from "./auth-screens/RegisterDummy";
import TestAxios from "./test-screens/TestAxios";
import TestGetExercises from "./test-screens/TestGetExercises";
// import Login2nd from "./auth/Login2nd";
import Login from "./auth-screens/Login";
import Register from "./auth-screens/Register";

// import other home
import Home from "./pages-screens/Home";
import Preferences from "./pages-screens/Preferences";
import Generate from "./pages-screens/Generate";

export default function PageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<LoginDummy></LoginDummy>}></Route>
          <Route path="/login-v2" element={<Login></Login>}></Route>
          <Route path="/register" element={<RegisterDummy></RegisterDummy>}></Route>
          <Route path="/register-v2" element={<Register></Register>}></Route>

          {/* home */}
          <Route path={"/preferences"} element={<Preferences></Preferences>}></Route>
          <Route path={"/generate"} element={<Generate></Generate>}></Route>

          {/* test routes */}
          <Route path="/test-post" element={<TestAxios></TestAxios>}></Route>
          <Route path="/test-get-exercises" element={<TestGetExercises></TestGetExercises>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
