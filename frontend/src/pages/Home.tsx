// react import
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DateComponent from "../components/DateComponent";

//import assets
import HeroImage from "../assets/image/hero_image.jpg";

//heroicons
import { ArrowLongRightIcon, Bars2Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

import "boxicons";
// get the user data from django
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function NavLinks() {
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

function Nav() {
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
          <Link
            to="/"
            className="font-aeonik font-normal text-md group-hover:text-snow-white"
          >
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

function HomeHero() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/api/user/profile/', {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('access_token')}`, // Assuming JWT is stored in localStorage
  //         },
  //       });
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // if (!user) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <div className="relative h-100 mt-5 flex items-center justify-center md:h-150">
        {/* background image */}
        <img
          src={HeroImage}
          className="absolute w-full h-full object-cover filter brightness-50"
          alt="Hero Background"
        />

        {/* hero info container */}
        <div className="relative z-10 text-snow-white space-y-2.5 mx-5 my-auto flex flex-col items-center justify-center md:space-y-6">
          <p className="font-dmsans font-medium text-sm md:text-lg">
            Start your fitness and diet routine plan
          </p>
          <h1 className="font-medium text-2xl md:text-5xl">
            Welcome, <span className="text-brand">Dummy Name</span>
          </h1>
          <DateComponent />
          <Link
            to="/"
            className="inline-flex bg-brand font-dmsans text-moss-black p-2 text-sm rounded-lg md:p-3 md:text-base hover:bg-amber-700 hover:text-snow-white"
          >
            Today's Routine
          </Link>
        </div>
      </div>
    </>
  );
}

function ServicesSec() {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 24 24"
            >
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              labore assumenda quod nulla autem facere repellat animi commodi,
              ducimus rerum nam aperiam fuga veniam suscipit consequatur
              expedita eius sequi obcaecati.
            </p>
            {/* browse more cont */}
            <div className="inline-flex items-center gap-3">
              <a
                href="http://"
                className="font-dmsans text-sm group-hover:text-snow-white"
              >
                Browse More
              </a>
              <ArrowLongRightIcon className="size-5 group-hover:text-snow-white" />
            </div>
          </div>
          <div className="group bg-gray-200 hover:bg-moss-black hover:text-snow-white flex flex-col px-4 py-5 h-auto space-y-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="-2 -2 24 24"
            >
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              labore assumenda quod nulla autem facere repellat animi commodi,
              ducimus rerum nam aperiam fuga veniam suscipit consequatur
              expedita eius sequi obcaecati.
            </p>
            <div className="inline-flex items-center gap-3">
              <a
                href="http://"
                className="font-dmsans text-sm group-hover:text-snow-white"
              >
                Browse More
              </a>
              <ArrowLongRightIcon className="size-5 group-hover:text-snow-white" />
            </div>
          </div>
          <div className="group bg-gray-200 hover:bg-moss-black hover:text-snow-white flex flex-col px-4 py-5 h-auto space-y-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 24 24"
            >
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              labore assumenda quod nulla autem facere repellat animi commodi,
              ducimus rerum nam aperiam fuga veniam suscipit consequatur
              expedita eius sequi obcaecati.
            </p>
            <div className="inline-flex items-center gap-3">
              <a
                href="http://"
                className="font-dmsans text-sm group-hover:text-snow-white"
              >
                Browse More
              </a>
              <ArrowLongRightIcon className="size-5 group-hover:text-snow-white" />
            </div>
          </div>
          <div className="group bg-gray-200 hover:bg-moss-black hover:text-snow-white flex flex-col px-4 py-5 h-auto space-y-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 24 24"
            >
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              labore assumenda quod nulla autem facere repellat animi commodi,
              ducimus rerum nam aperiam fuga veniam suscipit consequatur
              expedita eius sequi obcaecati.
            </p>
            <div className="inline-flex items-center gap-3">
              <a
                href="http://"
                className="font-dmsans text-sm group-hover:text-snow-white"
              >
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

function Contacts() {
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M30.51 29.42c-1.454 4.82-5.644 8.553-10.738 9.294a13.28 13.28 0 0 1-8.48-1.555l-4.344 1.088c-1.107.275-2.113-.722-1.839-1.83l1.089-4.353a13.3 13.3 0 0 1-1.555-8.47c.86-5.826 5.607-10.482 11.452-11.196c3.036-.375 5.908.275 8.296 1.656"
                      stroke-width="2"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M34.493 9.22c4.538.56 8.232 4.171 8.894 8.696a10.3 10.3 0 0 1-1.208 6.584l.846 3.377a1.173 1.173 0 0 1-1.423 1.423l-3.378-.845a10.3 10.3 0 0 1-6.584 1.207c-4.525-.662-8.137-4.356-8.695-8.895A10.325 10.325 0 0 1 34.493 9.22"
                      stroke-width="1.5"
                    />
                  </svg>
                  <div className="">
                    <h1 className="text-snow-white mb-1 text-lg font-medium">
                      Chat with us
                    </h1>
                    <p className="text-gray-400 font-dmsans text-sm">
                      Lorem ipsum dolor sit amet
                    </p>
                    <a
                      href="#"
                      className="text-snow-white text-xs font-dmsans hover:underline"
                    >
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
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                    </g>
                  </svg>
                  <div>
                    <h1 className="text-snow-white mb-1 text-lg font-medium">
                      Visit Us
                    </h1>
                    <p className="text-gray-400 font-dmsans text-sm">
                      Lorem ipsum dolor sit amet
                    </p>
                    <a
                      href="#"
                      className="text-snow-white text-xs font-dmsans hover:underline"
                    >
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
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M7.829 16.171a20.9 20.9 0 0 1-4.846-7.614c-.573-1.564-.048-3.282 1.13-4.46l.729-.728a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.42.42a1.81 1.81 0 0 0 0 2.56l3.84 3.841a1.81 1.81 0 0 0 2.56 0l.421-.42a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.728.728c-1.178 1.179-2.896 1.704-4.46 1.131a20.9 20.9 0 0 1-7.614-4.846Z"
                    />
                  </svg>
                  <div>
                    <h1 className="text-snow-white mb-1 text-lg font-medium">
                      Call Us
                    </h1>
                    <p className="text-gray-400 font-dmsans text-sm">
                      Lorem ipsum dolor sit amet
                    </p>
                    <a
                      href="#"
                      className="text-snow-white text-xs font-dmsans hover:underline"
                    >
                      +63 123 456 7890
                    </a>
                  </div>
                </div>
              </div>

              {/* social icons section */}
              <div className="flex mt-10 gap-3">
                {/* facebook icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#F8F8FF"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  />
                </svg>
                {/* instagram icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#F8F8FF"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
                {/* youtube icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#F8F8FF"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  />
                </svg>
                {/* tiktok icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#F8F8FF"
                    d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-brand rounded-xl self-start grid grid-cols-1 p-5 space-y-3 md:col-span-4">
            <h1 className="text-moss-black text-3xl font-semibold">
              Any concerns, don’t worry <br />
              we’re open to have a chat with you
            </h1>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>

            {/* form section */}
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent w-full rounded-lg px-2 h-8 text-sm text-moss-black border border-moss-black"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div>
        <Nav />
        <HomeHero />
        <ServicesSec />
        <Contacts />
      </div>
    </>
  );
}
