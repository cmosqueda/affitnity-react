import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// pic
import MorningWorkout from "../assets/image/morning_workout.png";

export default function Generate() {
  return (
    <>
      {/* logo */}
      <div className="px-5 pt-6">
        <h1 className="font-aeonik text-moss black text-2xl font-semibold md:text-[28px]">
          Af
          <span className="text-brand">fit</span>
          nity
        </h1>
      </div>

      {/* screen content */}
      <div className=" flex md:flex-row flex-col max-w-full md:h-[80vh] h-[120vh] items-center justify-center  space-y-4 space-x-0 md:space-x-10">
        <div className=" space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl my-3 font-aeonik font-semibold">Set Up Done!</h1>
            <p className="text-xl font-manrope text-gray-500 text-[12px]">
              You're All Set! What Would You Like to Generate?
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-2 font-dmsans">
            {/* exercise */}
            <Button className=" bg-brand text-snow-white p-2 hover:bg-amber-700 hover:text-snow-white">
              Exercise Plan
            </Button>

            {/* diet */}
            <Button className="  bg-emerald text-snow-white p-2 hover:bg-green-600 hover:text-snow-white">
              Diet Plan
            </Button>

            {/* exercise and diet */}
            <Button className=" bg-moss-black text-snow-white p-2 hover:bg-neutral-700 hover:text-snow-white">
              Exercise & Diet Plan
            </Button>

            <Separator className="my-3"></Separator>

            {/* not now */}
            <Link to={"/"} className="text-center hover:underline hover:text-amber-700 p-2">
              Not now. I'll do it later.
            </Link>
          </div>
        </div>

        {/* pic */}
        <img
          src={MorningWorkout}
          alt="morning workout"
          className="md:visible invisible rounded-lg w-[600px] object-contain shadow-xl"
        />
      </div>
    </>
  );
}
