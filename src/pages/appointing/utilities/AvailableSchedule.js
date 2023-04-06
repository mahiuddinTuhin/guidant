import React from "react";
import { AiOutlineSchedule } from "react-icons/ai";
const AvailableSchedule = ({ time }) => {
  return (
    <div>
      <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <h1>Available Schedule at 23rd April, 2023</h1>
        <li className="border rounded-lg">
          <div className="flex items-start justify-between p-4">
            <div className="space-y-2">
              <AiOutlineSchedule className="text-5xl text-[#221E1F]" />
              <h4 className="text-gray-800 font-semibold">Time: </h4>
              <p className="text-gray-600 text-sm">{time}</p>
            </div>
            <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">
              Set Appointment
            </button>
          </div>
          <div className="py-5 px-4 border-t text-right">
            <a
              href="/"
              className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
            >
              View integration
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AvailableSchedule;
