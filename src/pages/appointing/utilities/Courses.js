import React from "react";

const Courses = ({ course, id }) => {
  return (
    <div className="mr-2 md:mr-8">
      <span
        className={`rounded-full text-purple-800 px-3 py-1 md:py-2 md:px-4 cursor-pointer text-xs md:text-lg font-normal ${
          id % 2 === 0 ? "bg-purple-100" : "bg-yellow-400"
        }`}
      >
        {course}
      </span>
    </div>
  );
};

export default Courses;
