import { Link } from "react-router-dom";

// contacts
export default function Contacts() {
  return (
    <>
      <div className="mx-5 my-30 md:mt-45">
        <div className="grid grid-cols-1 gap-3 md:mx-50 md:grid-cols-6">
          <div className="bg-moss-black p-5 rounded-lg grid grid-cols-1 md:col-span-2">
            {/* get in touch title */}
            <h1 className="text-snow-white text-3xl font-semibold mb-5">
              Get in touch <br /> with us
            </h1>
            {/* contacts container */}
            <div className="space-y-4">
              {/* chat section */}
              <div>
                {/* chat svg cont */}
                <div className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 48 48"
                    className="bg-snow-white p-1 rounded-lg"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M30.51 29.42c-1.454 4.82-5.644 8.553-10.738 9.294a13.28 13.28 0 0 1-8.48-1.555l-4.344 1.088c-1.107.275-2.113-.722-1.839-1.83l1.089-4.353a13.3 13.3 0 0 1-1.555-8.47c.86-5.826 5.607-10.482 11.452-11.196c3.036-.375 5.908.275 8.296 1.656"
                      strokeWidth="2"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M34.493 9.22c4.538.56 8.232 4.171 8.894 8.696a10.3 10.3 0 0 1-1.208 6.584l.846 3.377a1.173 1.173 0 0 1-1.423 1.423l-3.378-.845a10.3 10.3 0 0 1-6.584 1.207c-4.525-.662-8.137-4.356-8.695-8.895A10.325 10.325 0 0 1 34.493 9.22"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="">
                    <h1 className="text-snow-white mb-1 text-lg font-medium">Chat with us</h1>
                    <p className="text-gray-400 font-dmsans text-sm">Lorem ipsum dolor sit amet</p>
                    <a href="#" className="text-snow-white text-xs font-dmsans hover:underline">
                      dummycompanysite.com
                    </a>
                  </div>
                </div>
              </div>

              {/* visit us section */}
              <div>
                {/* visit us svg cont */}
                <div className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="bg-snow-white p-[3px] rounded-lg"
                  >
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                    </g>
                  </svg>
                  <div>
                    <h1 className="text-snow-white mb-1 text-lg font-medium">Visit Us</h1>
                    <p className="text-gray-400 font-dmsans text-sm">Lorem ipsum dolor sit amet</p>
                    <a href="#" className="text-snow-white text-xs font-dmsans hover:underline">
                      100th Street,
                      <br />
                      Cagayan de Oro City, 9000
                    </a>
                  </div>
                </div>
              </div>

              <div>
                {/* visit us svg cont */}
                <div className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    className="bg-snow-white p-1 rounded-lg"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.829 16.171a20.9 20.9 0 0 1-4.846-7.614c-.573-1.564-.048-3.282 1.13-4.46l.729-.728a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.42.42a1.81 1.81 0 0 0 0 2.56l3.84 3.841a1.81 1.81 0 0 0 2.56 0l.421-.42a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.728.728c-1.178 1.179-2.896 1.704-4.46 1.131a20.9 20.9 0 0 1-7.614-4.846Z"
                    />
                  </svg>
                  <div>
                    <h1 className="text-snow-white mb-1 text-lg font-medium">Call Us</h1>
                    <p className="text-gray-400 font-dmsans text-sm">Lorem ipsum dolor sit amet</p>
                    <a href="#" className="text-snow-white text-xs font-dmsans hover:underline">
                      +63 123 456 7890
                    </a>
                  </div>
                </div>
              </div>

              {/* social icons section */}
              <div className="flex mt-10 gap-3">
                {/* facebook icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#F8F8FF"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  />
                </svg>
                {/* instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#F8F8FF"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
                {/* youtube icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#F8F8FF"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  />
                </svg>
                {/* tiktok icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#F8F8FF"
                    d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* <div className="bg-brand rounded-xl grid grid-cols-1 p-5 md:col-span-4">
            <h1 className="text-moss-black text-3xl font-semibold">
              Any concerns, don’t worry <br />
              we’re open to have a chat with you
            </h1>
            <p className="text-sm font-dmsans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>

            {/* form section
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border-0 border-b w-full h-8 text-sm text-moss-black placeholder:text-moss-black border-moss-black focus:outline-none"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Your email"
                className="bg-transparent mb-8 border-0 border-b w-full h-8 text-sm text-moss-black placeholder:text-moss-black border-moss-black focus:outline-none"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Your message"
                className="bg-transparent border-0 border-b mb-5 w-full h-8 text-sm text-moss-black placeholder:text-moss-black border-moss-black focus:outline-none"
              />
            </div>

            <Link
              to=""
              className="bg-moss-black text-snow-white hover:bg-gray-900 p-2 rounded-lg font-dmsans text-sm text-center"
            >
              Submit your message
            </Link>
          </div> */}

          {/* right container */}
          <div className="bg-brand grid grid-rows-[1fr_auto] rounded-lg p-5 md:col-span-4">
            <div>
              <h1 className="text-2xl text-moss-black font-semibold mb-5 md:text-3xl">
                Any concerns, don’t worry <br />
                we’re open to have a chat with you
              </h1>

              <p className="text-sm font-dmsans mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

              {/* input forms */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-transparent mb-3 border-0 border-b w-full h-8 text-sm text-moss-black placeholder:text-moss-black border-moss-black focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Your email"
                  className="bg-transparent mb-10 border-0 border-b w-full h-8 text-sm text-moss-black placeholder:text-moss-black border-moss-black focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Your message"
                  className="bg-transparent mb-3 border-0 border-b w-full h-8 text-sm text-moss-black placeholder:text-moss-black border-moss-black focus:outline-none"
                />
              </div>
            </div>

            <Link
              to=""
              className="bg-moss-black text-snow-white hover:bg-gray-900 block w-full p-2 rounded-md font-dmsans text-sm text-center"
            >
              Submit your message
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
