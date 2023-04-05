import React from "react";

const TakeScheduleNow = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[24rem]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')",
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Take a schedule from a teacher now.
          </h1>
          <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Appoint now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeScheduleNow;
