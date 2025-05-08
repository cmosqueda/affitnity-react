// import all home components
import Nav from "./components/Nav";
import HomeHero from "./components/HomeHero";
import ServicesSec from "./components/ServicesSec";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <>
      <div>
        <Nav />
        <HomeHero />
        <ServicesSec />
        <Contacts />
      </div>
    </>
  );
}
