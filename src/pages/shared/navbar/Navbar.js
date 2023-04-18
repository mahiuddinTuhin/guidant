import React, { useEffect, useState } from "react";
import { FaGrav } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAccount } from "../../../features/authentication/authApi";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { loggedInUser } = useSelector((state) => state.authentication);

  const handleSignout = () => {
    logoutAccount();
  };

  return (
    /* <!-- ====== Navbar Section Start --> */
    <header
      x-data="
        {
          navbarOpen: false
        }
      "
      class="flex w-full items-center bg-white"
    >
      <div class="container mx-auto">
        <div class="relative -mx-4 flex items-center justify-between">
          <div class="w-60 max-w-full px-4">
            <a href="/" class="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                alt="logo"
                class="w-full"
              />
            </a>
          </div>
          <div class="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className={`${isDrawerOpen && "navbarTogglerActive"}`}
                id="navbarToggler"
                class="ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
              >
                <span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                <span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                <span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
              </button>
              <nav
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className={`${isDrawerOpen && "hidden"}`}
                id="navbarCollapse"
                class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
              >
                <ul class="block lg:flex">
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="javascript:void(0)"
                class="text-dark hover:text-primary py-3 px-7 text-base font-medium"
              >
                Login
              </a>
              <a
                href="javascript:void(0)"
                class="bg-primary rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    /* <!-- ====== Navbar Section End --> */
  );
};

export default Navbar;
