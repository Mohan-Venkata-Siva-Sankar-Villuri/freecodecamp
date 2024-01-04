import React from "react";

const CoursesList = ({ id, img, text }) => {
  return (
    <div>
      <li
        key={id}
        className="w-[665px] h-[75px] bg-[#D0D0D5] border-solid border-black border-3 mb-1 flex items-center"
      >
        <img className="pl-2" src={img} alt={text} />
        <p className="p-3">{text} (300 hours)</p>
      </li>
    </div>
  );
};

export default CoursesList;
