import React from "react";

const Home = () => {
  const FeatureParagraph = ({ text, className = "" }) => (
    <p className={`mb-5 ${className}`}>{text}</p>
  );
  return (
    <div className="pt-32 bg-[#F5F6F7]">
      <div className="min-h-[1px] px-[15px] w-full md:w-4/6 min-w-[800px] md:ml-[20.3%] min-[1200px]:ml-[25.6%]">
        <div className="text-6xl font-semibold mb-5">
          <FeatureParagraph text="Learn to code - for free." />
          <FeatureParagraph text="Build projects." />
          <FeatureParagraph text="Earn certifications." />
        </div>
        <div className="text-2xl font-bold w-[800px] mb-4">
          <p>
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
            jobs at tech companies including:
          </p>
        </div>
        <ul className="flex justify-between w-[800px] mb-2 items-center">
          <li className="w-8 h-10">
            <img alt="apple" src="images/apple.png" />
          </li>
          <li className="w-28 h-10">
            <img alt="google" src="images/google.png" />
          </li>
          <li className="w-28">
            <img alt="microsoft" src="images/microsoft.png" />
          </li>
          <li className="w-28 h-10">
            <img alt="apple" src="images/spotify.png" />
          </li>
          <li className="w-28 ">
            <img className="h-8" alt="apple" src="images/Amazon.png" />
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <button className="bg-gradient-to-b from-[#fecc4c] to-[#ffac33] border-[#feac32] border-2 max-w-[500px] my-5 w-full p-2 text-4xl text-[#0a0a23] bg-[#feac32]">
          Get started (it's free)
        </button>
      </div>
    </div>
  );
};

export default Home;
