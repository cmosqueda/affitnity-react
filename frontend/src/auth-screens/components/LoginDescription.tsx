import { Link } from "react-router-dom";

// images
import FitnessPic from "../../assets/image/fitness_pic.jpg";

// login description
export default function LoginDescription() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 mx-5 md:mx-17 md:grid-cols-2">
          {/* description container */}
          <div className="md:order-first md:my-auto">
            <h2 className="font-aeonik text-[20px] leading-8 font-bold text-moss-black mt-5 md:text-3xl md:mb-5">
              Thank you for choosing us to <br /> start your fitness and diet journey.
            </h2>
            <p className="font-dmsans text-[15px] mt-3 mb-5 md:text-lg md:w-xl md:mb-5">
              We're excited to be part of your transformation. Whether you're here to build strength, eat healthier, or
              simply feel better every day — we're here to guide you at every step. Let’s achieve your goals together
              with personalized support, proven strategies, and a community that has your back.
            </p>
            <Link
              // create a page nga kamulo pa siya og buhat
              to="/"
              className="px-5 py-3 text-[14px] rounded-lg inline-flex items-center justify-center bg-moss-black font-dmsans text-snow-white hover:bg-gray-800"
            >
              Rate Affitnity
            </Link>
          </div>

          {/* image container */}
          <div className="order-first">
            <img src={FitnessPic} alt="fitness picture ni dari" className="w-3xl rounded-lg md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
