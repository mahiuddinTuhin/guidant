import React from "react";

const AppointingHero = ({ teacher }) => {
  const {
    id,
    name,
    institute,
    position,
    experience,
    department,
    courses,
    features,
    speciality,
    image,
    ratings,
    email,
    address,
    perHourFair,
    student_deals,
  } = teacher;
  return (
    <section className="container m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 md:p-32 lg:py-12">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src="https://edtech4beginnerscom.files.wordpress.com/2021/05/1.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
              {" "}
              Your tagline{" "}
            </span>
            {/* name of teacher */}
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              {name}
            </h1>
            {/* details experiance and department */}
            <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
              <span className="font-bold">{position}</span> in {department}{" "}
              Department, {institute}.
              <br />
              {experience} experiance in{" "}
              {courses &&
                courses.reduce(
                  (prev, curr, index) => (
                    <span>
                      {prev}
                      {index === courses.length - 1 ? curr : curr + ", "}{" "}
                    </span>
                  ),
                  ""
                )}
              .
            </p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Get bundle
                </button>
              </div>
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  See features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointingHero;
