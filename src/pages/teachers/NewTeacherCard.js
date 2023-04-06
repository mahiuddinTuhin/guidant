import React from "react";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewTeacherCard = ({ teacher }) => {
  const {
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
    student_deals,
    email,
    address,
    perHourFair,
    id,
  } = teacher;

  // getting stars

  const StarRatings = () => {
    const fullStars = Math.floor(ratings);
    const hasHalfStar = ratings % 1 !== 0;
    const emptyStars = 5 - Math.ceil(ratings);

    const fullStarIcons = Array.from({ length: fullStars }, (_, index) => (
      <BsStarFill key={`full-${index}`} />
    ));
    const halfStarIcon = hasHalfStar ? <BsStarHalf key="half" /> : null;
    const emptyStarIcons = Array.from({ length: emptyStars }, (_, index) => (
      <BsStar key={`empty-${index}`} />
    ));

    const stars = [...fullStarIcons, halfStarIcon, ...emptyStarIcons];

    return <div className="flex text-xl">{stars}</div>;
  };

  return (
    <Link
      to={`/appointing/${id}`}
      className="group relative rounded-3xl  space-y-6 overflow-hidden shadow-lg"
    >
      <img
        className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        src={image}
        alt="woman"
        loading="lazy"
        width="640"
        height="805"
      />
      <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
        <div>
          <div className="text-xl font-semibold dark:text-gray-700 text-white flex justify-between items-center">
            <span>{name}</span>
            <span className="text-xs text-yellow-500">
              <StarRatings />
            </span>
          </div>
          <span className="block text-sm text-gray-500">
            {position}- {institute}
          </span>
        </div>

        <div className="mt-1 text-gray-300 dark:text-gray-600 flex justify-between">
          <p className="">{department}</p>
          <p>Experience: {experience}</p>
        </div>
        <p className="mt-2 text-gray-300 dark:text-gray-600 text-sm italic">
          {email}
          <br />
          {address}
        </p>
      </div>
    </Link>
  );
};

export default NewTeacherCard;
