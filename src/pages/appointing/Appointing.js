import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchingTeacher } from "../../features/teacher/teacherSlice";
import AppointingCalander from "./utilities/AppointingCalander";
import AppointingHero from "./utilities/AppointingHero";
import AvailableSchedule from "./utilities/AvailableSchedule";

const Appointing = () => {
  const dispatch = useDispatch();
  const { teacherid } = useParams();

  const teacher = useSelector((state) => state.teacher);
  const { isLoading, isError, error, teacher: appointingTeacher } = teacher;
  console.log({ isLoading, isError, error, appointingTeacher });
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
  } = appointingTeacher;

  useEffect(() => {
    dispatch(fetchingTeacher(teacherid));
  }, [dispatch]);

  return (
    <div>
      <AppointingHero teacher={appointingTeacher} />
      <AppointingCalander />
      <AvailableSchedule />
    </div>
  );
};

export default Appointing;
