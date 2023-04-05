import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingTeachers } from "../../features/teachers/teacherSlice";
import Error from "../shared/Error/Error";
import Loader from "../shared/loader/Loader";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    isError,
    error,
    teachers: teachersData,
  } = useSelector((state) => state.teachers);

  useEffect(() => {
    dispatch(fetchingTeachers());
  }, []);

  let content = null;

  if (isLoading) {
    content = <Loader />;
  }

  if (!isLoading && isError) {
    content = <Error message={error} />;
  }

  if (!isLoading && !isError && teachersData.length === 0) {
    content = <h1>No Data found</h1>;
  }
  if (!isLoading && !isError && teachersData.length > 0) {
    content = (
      <div className="flex flex-wrap gap-8">
        {teachersData.slice().map((t, i) => (
          <TeacherCard key={i} teacher={t} />
        ))}
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
