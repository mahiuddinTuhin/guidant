import React from "react";

const Offer = () => {
  return (
    <div class="py-16">
      <div class="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
        <div class="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
          <div class="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h1 class="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
              Take your first schedule and benefit up to
              <span class="text-primary dark:text-sky-300">30% off</span>
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              Be part of millions people around the world using Guidant in
              modern teaching Interfaces.
            </p>
            <div class="flex flex-wrap gap-6">
              <a
                href="#"
                class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span class="relative text-base font-semibold text-white dark:text-dark">
                  Shop now
                </span>
              </a>
              <a
                href="#"
                class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span class="relative text-base font-semibold text-primary dark:text-white">
                  More about
                </span>
              </a>
            </div>
          </div>
          <div class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
            <div class="col-span-2 row-span-4">
              <img
                src="https://www.frontiersin.org/image/researchtopic/42455"
                class="rounded-full w-[160px] h-[240px]"
                alt="shoes"
                loading="lazy"
              />
            </div>
            <div class="col-span-2 row-span-2">
              <img
                src="https://www.theedadvocate.org/wp-content/uploads/2017/03/5468679996_6c663c906f_z.jpg"
                class="rounded-xl object-cover object-top  w-full h-[120px]"
                alt="shoe"
                loading="lazy"
              />
            </div>
            <div class="col-span-3 row-span-3">
              <img
                src="https://i.guim.co.uk/img/media/6909bc33c38ea797d8d52cd681ff31bd28dd95ba/0_45_5000_3000/master/5000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5919d1eddd76d37bf85e89b459af6b63"
                class="rounded-xl object-cover object-top h-[360px]"
                alt="shoes"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
