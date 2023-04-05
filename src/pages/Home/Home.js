import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchingTeachers } from "../../features/teachers/teacherSlice";

import Hero from "./hero/Hero";
import InfoCard from "./infoCard/InfoCard";
import ReputatedTeacher from "./ReputatedTeacher/ReputatedTeacher";
import Testimonial from "./testimonial/Testimonial";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingTeachers());
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <InfoCard />
      <ReputatedTeacher />
      <Testimonial />
    </div>
  );
}

export default Home;
