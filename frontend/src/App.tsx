// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import PageRoutes from "./PageRoutes";
import { AuthProvider } from "./AuthContext";

export default function App() {
  return (
    <>
      <AuthProvider>
        <PageRoutes />
      </AuthProvider>
    </>
  );
}
