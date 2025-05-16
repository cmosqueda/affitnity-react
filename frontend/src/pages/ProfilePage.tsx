//react modules
import { Link } from "react-router-dom";
import SettingsProfile from "../components/SettingsProfile";
import Footer from "../pages/Footer";

//heroicons
import {
  CalendarIcon,
  UserIcon,
  ScaleIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function ProfilePage() {
  return (
    <>
      <div className="p-5 sm:h-screen">
        {/* cover container */}
        <div className="bg-orange-100 w-full h-30 rounded-lg relative sm:h-50">
          {/* profile icon */}
          <div className="flex absolute -bottom-15 left-4 justify-center items-center bg-brand rounded-full w-30 h-30 sm:left-5 md:left-7">
            <h1 className="font-aeonik text-4xl font-bold text-orange-950">
              PN
            </h1>
          </div>
        </div>

        {/* edit profile button */}
        <div className="hover:bg-gray-700 font-medium text-moss-black px-3 py-2 rounded-md inline-block float-right bg-moss-black mt-3 sm:mx-5 md:mx-8">
          <Link to="/" className="text-snow-white text-sm">
            Edit Profile
          </Link>
        </div>

        <div className="h-20" />

        <div className="sm:px-5 md:px-8">
          {/* name and email container */}
          <div className="mb-5">
            <h1 className="mb-1 font-semibold text-2xl">Dummy Name Here</h1>
            <p className="font-dmsans text-sm">@usernamehere</p>
          </div>

          {/* about me */}
          <div className="grid grid-cols-1 space-y-6 sm:grid-cols-2 sm:space-y-0 sm:gap-4 md:grid-cols-3">
            {/* about me choices */}
            <div className="grid gap-3">
              <h1 className="text-moss-black font-medium text-[15px]">
                About Me
              </h1>

              <SettingsProfile
                icon={<CalendarIcon className="w-5 h-5" />}
                text={"Birthdate"}
                subText={"December 29, 2003"}
                containerClass="hover:bg-gray-200 bg-gray-100 p-2 rounded-xl border border-moss-black h-11"
                iconClass="text-moss-black"
                subTextClass="text-xs text-gray-600"
                textClass="text-gray-800 font-medium text-sm"
              />

              <SettingsProfile
                icon={<UserIcon className="w-5 h-5" />}
                text={"Gender"}
                subText={"Male"}
                containerClass="hover:bg-gray-200 bg-gray-100 p-2 rounded-xl border border-moss-black h-11"
                iconClass="text-moss-black"
                subTextClass="text-xs text-gray-600"
                textClass="text-gray-800 font-medium text-sm"
              />
            </div>

            {/* health choices */}
            <div className="grid gap-3">
              <h1 className="text-moss-black font-medium text-[15px]">
                Health
              </h1>

              <SettingsProfile
                icon={<ScaleIcon className="w-5 h-5" />}
                text={"Weight"}
                subText={"50kg"}
                containerClass="hover:bg-gray-200 bg-gray-100 p-2 rounded-xl border border-moss-black h-11"
                iconClass="text-moss-black"
                subTextClass="text-xs text-gray-600"
                textClass="text-gray-800 font-medium text-sm"
              />

              <SettingsProfile
                icon={<ChartBarIcon className="w-5 h-5" />}
                text={"Height"}
                subText={"6'0"}
                containerClass="hover:bg-gray-200 bg-gray-100 p-2 rounded-xl border border-moss-black h-11"
                iconClass="text-moss-black"
                subTextClass="text-xs text-gray-600"
                textClass="text-gray-800 font-medium text-sm"
              />
            </div>

            {/* general choices */}
            <div className="grid gap-3">
              <h1 className="text-moss-black font-medium text-[15px]">
                General
              </h1>

              <SettingsProfile
                icon={<QuestionMarkCircleIcon className="w-5 h-5" />}
                text={"Help"}
                subText={""}
                containerClass="hover:bg-gray-200 bg-gray-100 p-2 rounded-xl border border-moss-black h-11"
                iconClass="text-moss-black"
                subTextClass="text-xs text-gray-600"
                textClass="text-gray-800 font-medium text-sm"
              />

              <SettingsProfile
                icon={<ArrowLeftStartOnRectangleIcon className="w-5 h-5" />}
                text={"Log Out"}
                subText={""}
                containerClass="hover:bg-red-200 bg-red-100 p-2 rounded-xl border border-red-600 h-11"
                iconClass="text-red-600 scale-x-[-1]"
                subTextClass="text-xs text-gray-600"
                textClass="text-red-800 font-medium text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
