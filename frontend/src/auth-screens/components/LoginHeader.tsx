import { Link } from "react-router-dom";

export default function LoginHeader() {
  return (
    <>
      <div className="flex items-center justify-between px-5 pt-6">
        {/* logo text */}
        <h1 className="black text-2xl font-semibold md:text-[28px]">
          Af<span className="">fit</span>nity
        </h1>

        {/* button container */}
        <div className="flex items-center gap-5 text-sm md:text-[15px]">
          <Link to={"/"}>Login</Link>
          <Link to={"/"} className="px-3 py-2 rounded-lg hover:bg-gray-800">
            Create an account
          </Link>
        </div>
      </div>
    </>
  );
}
