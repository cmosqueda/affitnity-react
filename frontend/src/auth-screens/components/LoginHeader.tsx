import { Link } from "react-router-dom";

export default function LoginHeader() {
  return (
    <>
      <div className="flex items-center justify-between px-5 pt-6">
        {/* Logo Text */}
        <h1 className="font-aeonik text-moss black text-2xl font-semibold md:text-[28px]">
          Af
          <span className="text-brand">fit</span>
          nity
        </h1>
        {/* Button container */}
        <div className="flex items-center gap-5 font-dmsans text-sm md:text-[15px]">
          <Link to="/">Login</Link>
          <Link to="/" className="text-snow-white bg-moss-black px-3 py-2 rounded-lg hover:bg-gray-800">
            Create an account
          </Link>
        </div>
      </div>
    </>
  );
}
