import React from "react";
import Hero from "./hero/Hero";
import InfoCard from "./infoCard/InfoCard";
import Offer from "./offer/Offer";
import ReputatedTeacher from "./ReputatedTeacher/ReputatedTeacher";
import Testimonial from "./testimonial/Testimonial";

function Home() {
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
