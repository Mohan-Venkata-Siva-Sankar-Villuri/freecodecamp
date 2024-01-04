import React, { useEffect, useState } from "react";
import CoursesList from "./CoursesList";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/courses");

        // Assuming the response contains an array of courses
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error.response.data.error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="pt-[70px] bg-[#F5F6F7] flex flex-col items-center justify-center ">
      <div className="font-bold mb-2 text-[26px]">
        <p className="p-3">Welcome to freeCodeCamp.org</p>
      </div>
      <div className="mb-4 p-2 flex flex-col items-center justify-center">
        <p className="text-3xl w-[600px] text-center">
          "I have not failed. I've just found 10,000 ways that won't work."
        </p>
        <em className="text-lg"> - Thomas A. Edison</em>
      </div>
      <ul className="flex flex-col leading-7 text-[22px] justify-center">
        {courses.map((course) => (
          <CoursesList key={course.id} {...course} />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
