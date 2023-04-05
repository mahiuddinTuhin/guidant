import React from "react";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

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
    <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
      <img
        class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        src={image}
        alt="woman"
        loading="lazy"
        width="640"
        height="805"
      />
      <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
        <div>
          <div class="text-xl font-semibold dark:text-gray-700 text-white flex justify-between">
            <span>{name}</span>
            <span className="text-xs text-rose-700">
              <StarRatings />
            </span>
          </div>
          <span class="block text-sm text-gray-500">
            {position}- {institute}
          </span>
        </div>
        <p class="mt-8 text-gray-300 dark:text-gray-600">
          Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?
        </p>
      </div>
    </div>
  );
};

export default NewTeacherCard;
