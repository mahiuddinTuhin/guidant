import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 relative">
        <div className="absolute inset-0 border-t-2 border-blue-500 animate-spin"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-blue-500 w-1 h-8 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
