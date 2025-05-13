import { NavLink } from "react-router-dom";
import { useRef } from "react";

export default function NavLinks() {
  //scroll to contacts and services section
  // const contactRef = useRef<HTMLElement>(null);

  // const scrollToContact = () => {
  //   if (contactRef.current) {
  //     contactRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  return (
    <>
      <div className="hidden sm:flex sm:gap-4 sm:font-medium sm:text-[16px] sm:transition-all sm:duration-300 md:text-[17px] md:gap-5">
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            `rounded-md font-medium text-[16px] transition-colors duration-300 ${
              isActive
                ? "text-gray-600"
                : "text-moss-black hover:text-yellow-300"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dummyplan"
          className={({ isActive }: { isActive: boolean }) =>
            `rounded-md font-medium text-[16px] transition-colors duration-300 ${
              isActive ? "text-brand" : "text-moss-black hover:text-brand"
            }`
          }
        >
          My Plan
        </NavLink>

        <NavLink
          to="/dummyplan"
          className={({ isActive }: { isActive: boolean }) =>
            `rounded-md font-medium text-[16px] transition-colors duration-300 ${
              isActive ? "text-blue-600" : "text-moss-black hover:text-blue-600"
            }`
          }
        >
          Workout Gallery
        </NavLink>

        {/* dari mo dungag og nav links */}
      </div>
    </>
  );
}
