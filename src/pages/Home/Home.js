import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchingTeachersData } from "../../features/teachers/teachersApi";

import Hero from "./hero/Hero";
import InfoCard from "./infoCard/InfoCard";
import ReputatedTeacher from "./ReputatedTeacher/ReputatedTeacher";
import Testimonial from "./testimonial/Testimonial";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingTeachersData());
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
