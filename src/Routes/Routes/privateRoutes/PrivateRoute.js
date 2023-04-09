import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loggedInUser, isLoading } = useSelector(
    (state) => state.authentication
  );
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>
          <div class="w-full max-w-md mx-auto animate-pulse p-9">
            <h1 class="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

            <p class="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p class="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p class="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
        </div>
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-10 mx-auto animate-pulse">
            <h1 class="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

            <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (loggedInUser?.id) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
