import React, { useState } from "react";

const Header = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <nav className="flex items-center justify-between h-[56px] text-2xl fixed w-full bg-black">
      <div className="w-[450px] p-2 ">
        <form className="relative flex w-full flex-wrap items-stretch bg-[#3a4570]">
          <button className="relative border-none z-[2] flex items-center rounded-r px-2 py-2 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <input
            type="search"
            className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l text-white bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search 8,000+ tutorials"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
        </form>
      </div>
      <div>
        <img src="images/freecodecamp.jpg" alt="freeCodeCamp"></img>
      </div>
      <div className="flex items-center justify-end w-[500px]">
        <button className="px-2 py-1 border text-white">Menu</button>
        {signIn && (
          <button
            onClick={() => setSignIn(true)}
            className="px-2 py-1 ml-2 mr-4 bg-gradient-to-b from-[#fecc4c] to-[#ffac33] border-[#feac32] text-[#0a0a23]"
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
