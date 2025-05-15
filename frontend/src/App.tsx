// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import PageRoutes from "./PageRoutes";
import { AuthProvider } from "./AuthContext";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <>
      <AuthProvider>
        <PageRoutes />
        {/* for toasts */}
        <Toaster richColors position="top-center" />
      </AuthProvider>
    </>
  );
}
