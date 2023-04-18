import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchingTeacher } from "../../features/teacher/teacherApi";

import AppointingCalander from "./utilities/AppointingCalander";
import AppointingHero from "./utilities/AppointingHero";
import AvailableSchedule from "./utilities/AvailableSchedule";
import Courses from "./utilities/Courses";

const Appointing = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { teacherid } = useParams();

  const teacher = useSelector((state) => state.teacher);
  const {
    // isLoading,
    // isError,
    // error,
    teacher: appointingTeacher,
  } = teacher;

  const {
    // id,
    // name,
    // institute,
    // position,
    // experience,
    // department,
    courses,
    // features,
    // speciality,
    // image,
    // ratings,
    // email,
    // address,
    // perHourFair,
    // student_deals,
  } = appointingTeacher;

  useEffect(() => {
    dispatch(fetchingTeacher(teacherid));
  }, [dispatch, teacherid]);

  // to show top of the page after refreshing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AppointingHero teacher={appointingTeacher} />
      <div className="flex items-center justify-center my-12">
        {courses &&
          courses?.map((c, id) => <Courses course={c} key={c} id={id} />)}
      </div>
      <div className="flex items-center justify-center flex-col lg:flex-row">
        <div className="shadow-lg lg:mr-12 rounded-md pb-8">
          <AppointingCalander
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className="">
          <AvailableSchedule
            teacher={appointingTeacher}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointing;
