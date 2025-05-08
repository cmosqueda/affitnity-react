// react import
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//heroicons
import { Bars2Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

// navlinks
import NavLinks from "./NavLinks";

export default function Nav() {
  // isOpen state to track the navbar status (open/close)
  const [isOpen, setIsOpen] = useState(false);

  // Effect to manage body scroll lock when the menu is open
  useEffect(() => {
    if (isOpen) {
      // Add the class to lock scrolling
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove the class to enable scrolling
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to ensure the class is removed when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Function to toggle the menu state (open/close)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center px-5 py-4 md:px-6 md:py-5">
        <h1 className="font-bold text-2xl text-moss-black">
          Af<span className="text-brand">fit</span>nity
        </h1>

        {/* Nav Links - Hidden on Mobile */}
        <div className="hidden md:block">
          <NavLinks />
        </div>

        {/* profile desktop view */}
        <div className="group hidden md:flex md:gap-3 md:items-center md:justify-center md:border md:border-moss-black md:p-2 md:rounded-xl md:hover:bg-moss-black">
          <div className="w-8 h-8 rounded-4xl bg-gray-600"></div>
          <Link to="/" className="font-aeonik font-normal text-md group-hover:text-snow-white">
            Mike Philip
          </Link>
        </div>

        {/* Mobile-only menu button */}
        {!isOpen && (
          <button onClick={toggleMenu} className="block z-20 md:hidden">
            <Bars2Icon className="size-7 text-moss-black" />
          </button>
        )}

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="bg-snow-white z-20 h-full w-full flex flex-col absolute top-0 left-0 p-5 md:hidden">
            {/* Close Button */}
            <button onClick={toggleMenu} className="self-end mt-1 mb-5">
              <XMarkIcon className="size-7 text-moss-black" />
            </button>

            <div className="flex flex-col self-end text-right font-aeonik font-medium text-lg gap-4">
              <Link to="/">Home</Link>
              <Link to="/" className="text-brand">
                Exercise Plan
              </Link>
              <Link to="/" className="text-green-400">
                Meal Plan
              </Link>
              <Link to="/" className="text-blue-600">
                Workout Gallery
              </Link>
              <Link to="/">Services</Link>
              <Link to="/">Contacts</Link>
            </div>

            <div className="flex flex-row-reverse items-center justify-center gap-5 absolute self-end bottom-0 mb-3">
              <div className="w-10 h-10 rounded-4xl bg-gray-600"></div>
              <h1 className="font-aeonik font-medium text-xl">Mike Philip</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
