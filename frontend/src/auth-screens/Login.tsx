// import all Login components
import LoginHeader from "./components/LoginHeader";
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
        <LoginHeader />
        <LoginForm />
        <LoginDescription />
        <ChooseUs />
        <Footer />
      </div>
    </>
  );
}
