// react import
import { Link } from "react-router-dom";

// navlinks
export default function NavLinks() {
  return (
    <>
      <nav className="md:flex md:gap-2 md:font-medium md:text-md lg:gap-7 lg:text-[16px]">
        <Link to="/" className="hover:text-slate-700">
          Home
        </Link>
        <Link to="/" className="hover:text-brand">
          Exercise Plan
        </Link>
        <Link to="/" className="hover:text-green-400">
          Meal Plan
        </Link>
        <Link to="/" className="hover:text-blue-600">
          Workout Gallery
        </Link>
        <Link to="/" className="hover:text-slate-700">
          Services
        </Link>
        <Link to="/" className="hover:text-slate-700">
          Contacts
        </Link>
      </nav>
    </>
  );
}
