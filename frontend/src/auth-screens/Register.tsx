// import all register components
import AuthScreensHeader from "./components/AuthScreensHeader";
import RegisterForm from "./components/RegisterForm";
import LoginDescription from "./components/LoginDescription";
import ChooseUs from "./components/ChooseUs";
import Footer from "@/custom-components/Footer";

// register screen
export default function Register() {
  return (
    <>
      <div>
        <AuthScreensHeader></AuthScreensHeader>
        <RegisterForm />
        <LoginDescription />
        <ChooseUs />
        <Footer />
      </div>
    </>
  );
}
