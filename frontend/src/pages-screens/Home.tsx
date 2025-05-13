// import all home components
import Nav from "./components/Nav";
import HomeHero from "./components/HomeHero";
import ServicesSec from "./components/ServicesSec";
import Contacts from "./components/Contacts";

// import all custom components
import Footer from "@/custom-components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Nav />
        <HomeHero />
        <ServicesSec />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
