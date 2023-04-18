import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingTeachersData } from "../../features/teachers/teachersApi";

import Error from "../shared/Error/Error";
import Loader from "../shared/loader/Loader";
import NewTeacherCard from "./NewTeacherCard";

const Teachers = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    isError,
    error,
    teachers: teachersData,
  } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(fetchingTeachersData());
  }, [dispatch]);

  let content = null;

  if (isLoading) {
    content = <Loader />;
  }

  if (!isLoading && isError) {
    content = <Error message={error} />;
  }

  if (!isLoading && !isError && teachersData?.length === 0) {
    content = <h1>No Data found</h1>;
  }
  if (!isLoading && !isError && teachersData?.length > 0) {
    content = (
      <div className="py-20">
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Find your teacher
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tailus prides itself not only on award-winning technology, but also
            on the talent of its people of some of the brightest minds and most
            experienced executives in business.
          </p>
        </div>
        <div className="grid gap-6 lg:gap-24 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          {teachersData.slice().map((t, i) => (
            <NewTeacherCard key={i} teacher={t} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="container m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
      <div>
        <h2>Find the reputed Teacher</h2>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Teachers;
