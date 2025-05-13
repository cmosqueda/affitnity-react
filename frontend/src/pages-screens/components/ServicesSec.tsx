//heroicons
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function ServicesSec() {
  return (
    <>
      <div className="mx-5 mt-30 md:mt-40 lg:mt-50">
        {/* services header text */}
        <div className="flex flex-col text-center gap-2">
          <p className="text-lg">We have what’s best for you</p>
          <h1 className="font-medium text-2xl">
            Our Offer to your Fitness and <br />
            Diet Plan journey
          </h1>
        </div>

        {/* grid services cont */}
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-4">
          <div className="group bg-gray-200 hover:bg-moss-black hover:text-snow-white flex flex-col px-4 py-5 h-auto space-y-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                className="group-hover:text-snow-white"
                d="m20.467 8.694l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M5.8 16h2.154l.6-1.5h2.892l.6 1.5H14.2L11 8H9zm4.2-5.115l.646 1.615H9.354zM15 16V8h2v8zM3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9h-2v8H4V5h10V3z"
              />
            </svg>
            <h1 className="font-medium text-2xl leading-8 group-hover:text-snow-white">
              AI Powered Fitness
              <br />& Nutrition
            </h1>
            <p className="font-manrope text-sm group-hover:text-snow-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae labore assumenda quod nulla autem facere
              repellat animi commodi, ducimus rerum nam aperiam fuga veniam suscipit consequatur expedita eius sequi
              obcaecati.
            </p>
            {/* browse more cont */}
            <div className="inline-flex items-center gap-3">
              <a href="http://" className="font-dmsans text-sm group-hover:text-snow-white">
                Browse More
              </a>
              <ArrowLongRightIcon className="size-5 group-hover:text-snow-white" />
            </div>
          </div>
          <div className="group bg-gray-200 hover:bg-moss-black hover:text-snow-white flex flex-col px-4 py-5 h-auto space-y-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="-2 -2 24 24">
              <path
                fill="currentColor"
                d="M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm6 7h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m-2 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2m0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2m-4.172 5.243L7.95 8.12a1 1 0 1 1 1.414 1.415l-2.828 2.828a1 1 0 0 1-1.415 0L3.707 10.95a1 1 0 0 1 1.414-1.414z"
              />
            </svg>
            <h1 className="font-medium text-2xl leading-8">
              Personalized Health
              <br />
              Plan
            </h1>
            <p className="font-manrope text-sm group-hover:text-snow-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae labore assumenda quod nulla autem facere
              repellat animi commodi, ducimus rerum nam aperiam fuga veniam suscipit consequatur expedita eius sequi
              obcaecati.
            </p>
            <div className="inline-flex items-center gap-3">
              <a href="http://" className="font-dmsans text-sm group-hover:text-snow-white">
                Browse More
              </a>
              <ArrowLongRightIcon className="size-5 group-hover:text-snow-white" />
            </div>
          </div>
          <div className="group bg-gray-200 hover:bg-moss-black hover:text-snow-white flex flex-col px-4 py-5 h-auto space-y-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M13.4 21.9L12 20.5l3.55-3.55l-8.5-8.5L3.5 12l-1.4-1.4l1.4-1.45l-1.4-1.4l2.1-2.1L2.8 4.2l1.4-1.4l1.45 1.4l2.1-2.1l1.4 1.4l1.45-1.4L12 3.5L8.45 7.05l8.5 8.5L20.5 12l1.4 1.4l-1.4 1.45l1.4 1.4l-2.1 2.1l1.4 1.45l-1.4 1.4l-1.45-1.4l-2.1 2.1l-1.4-1.4z"
              />
            </svg>
            <h1 className="font-medium text-2xl leading-8">
              Diverse Workouts
              <br />& Meal Choices
            </h1>
            <p className="font-manrope text-sm group-hover:text-snow-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae labore assumenda quod nulla autem facere
              repellat animi commodi, ducimus rerum nam aperiam fuga veniam suscipit consequatur expedita eius sequi
              obcaecati.
            </p>
            <div className="inline-flex items-center gap-3">
              <a href="http://" className="font-dmsans text-sm group-hover:text-snow-white">
                Browse More
              </a>
              <ArrowLongRightIcon className="size-5 group-hover:text-snow-white" />
            </div>
          </div>
          <div className="group bg-gray-200 hover:bg-moss-black hover:text-snow-white flex flex-col px-4 py-5 h-auto space-y-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M13.5 2c0 .444-.193.843-.5 1.118V5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h5V3.118A1.5 1.5 0 1 1 13.5 2M6 7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-4 3H0v6h2zm20 0h2v6h-2zM9 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
              />
            </svg>
            <h1 className="font-medium text-2xl leading-8">
              Smart Coaching
              <br />& Guide
            </h1>
            <p className="font-manrope text-sm group-hover:text-snow-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae labore assumenda quod nulla autem facere
              repellat animi commodi, ducimus rerum nam aperiam fuga veniam suscipit consequatur expedita eius sequi
              obcaecati.
            </p>
            <div className="inline-flex items-center gap-3">
              <a href="http://" className="font-dmsans text-sm group-hover:text-snow-white">
                Browse More
              </a>
              <ArrowLongRightIcon className="size-5 group-hover:text-snow-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
