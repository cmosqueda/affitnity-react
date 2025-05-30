// import all Login components
import AuthScreensHeader from "./components/AuthScreensHeader";
import LoginForm from "./components/LoginForm";
import LoginDescription from "./components/LoginDescription";
import ChooseUs from "./components/ChooseUs";

// import custom components
import Footer from "@/custom-components/Footer";

// login screen
export default function Login() {
  return (
    <>
      <div>
        <AuthScreensHeader />
        <LoginForm />
        <LoginDescription />
        <ChooseUs />
        <Footer />
      </div>
    </>
  );
}
