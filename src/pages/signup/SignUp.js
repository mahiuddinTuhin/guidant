import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createNewUser } from "../../features/authentication/authSlice";

const Signup = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submittedForm = (data) => {
    dispatch(
      createNewUser({
        name: data.fullName,
        email: data.email,
        password: data.password,
        accountType: data.accountType,
      })
    );
  };

  return (
    <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
      <div className="mx-auto h-full sm:w-max">
        <div className="m-auto  py-12">
          <div className="space-y-4">
            {/* <a href="">
              <img
                src="images/tailus.svg"
                className="w-40 dark:hidden"
                alt="tailus logo"
              />
              <img
                src="images/logo.svg"
                className="w-40 hidden dark:block"
                alt="tailus logo"
              />
            </a> */}
          </div>
          <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
              Signup to your account
            </h3>
            <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
              <button className="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                <div className="w-max mx-auto flex items-center justify-center space-x-4">
                  <FcGoogle className="text-2xl" />
                  <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                    With Google
                  </span>
                </div>
              </button>
              <button className="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                <div className="w-max mx-auto flex items-center justify-center space-x-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span className="block w-max text-sm font-semibold tracking-wide text-white">
                    With Github
                  </span>
                </div>
              </button>
            </div>

            <form
              onSubmit={handleSubmit((data) => submittedForm(data))}
              className="mt-10 space-y-8 dark:text-white"
            >
              <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  {/* full name */}

                  <input
                    {...register("fullName", {
                      required: true,
                      pattern: /^[a-z ,.'-]+$/i,
                    })}
                    id=""
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  />
                </div>
              </div>
              {errors.fullName && errors.fullName.type === "required" && (
                <p className="errorMsg text-red-500">Full Name is required.</p>
              )}
              {errors.fullName && errors.fullName.type === "pattern" && (
                <p className="errorMsg text-red-500">Full Name is not valid.</p>
              )}
              <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  {/* email */}

                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    })}
                    id=""
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"
                  />
                </div>
              </div>
              {errors.email && errors.email.type === "required" && (
                <p className="errorMsg text-red-500">Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="errorMsg text-red-500">Email is not valid.</p>
              )}
              <div className="space-y-3">
                <legend className="text-xs md:text-lg font-medium text-gray-900">
                  Account Type:
                </legend>
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
                  <div className="inline-flex items-center space-x-1.5">
                    <input
                      id="teacher"
                      type="radio"
                      value="teacher"
                      name="accountType"
                      {...register("accountType", {
                        required: true,
                      })}
                      className="cursor-pointer rounded-full border-gray-300 text-blue-600 transition focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    />
                    <label
                      htmlFor="teacher"
                      className="cursor-pointer truncate text-xs md:text-lg font-medium text-gray-500"
                    >
                      Teacher
                    </label>
                  </div>
                  <div className="inline-flex items-center space-x-1.5">
                    <input
                      {...register("accountType", {
                        required: true,
                      })}
                      id="student"
                      type="radio"
                      name="accountType"
                      value="student"
                      className="cursor-pointer rounded-full border-gray-300 text-blue-600 transition focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    />
                    <label
                      htmlFor="student"
                      className="cursor-pointer truncate text-xs md:text-lg font-medium text-gray-500"
                    >
                      Student
                    </label>
                  </div>
                  <div className="inline-flex items-center space-x-1.5">
                    <input
                      {...register("accountType", {
                        required: true,
                      })}
                      id="both"
                      type="radio"
                      name="accountType"
                      value="both"
                      className="cursor-pointer rounded-full border-gray-300 text-blue-600 transition focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    />
                    <label
                      htmlFor="both"
                      className="cursor-pointer truncate text-xs md:text-lg font-medium text-gray-500"
                    >
                      Both
                    </label>
                  </div>
                </div>
              </div>
              {errors.accountType && errors.accountType.type === "required" && (
                <p className="errorMsg text-red-500">
                  Account Type is required.
                </p>
              )}

              <div className="flex flex-col items-end">
                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    })}
                    id="password"
                    type="password"
                    placeholder="password"
                    className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none   transition"
                  />
                </div>
                {errors.password && errors.password.type === "required" && (
                  <p className="errorMsg text-red-500">Password is required.</p>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <p className="errorMsg text-red-500">
                    Minimum eight characters, at least one letter uppercase
                    <br /> and one letter lowercase and one number.
                  </p>
                )}
              </div>
              <div>
                <button className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                  <span className="text-base font-semibold text-white dark:text-gray-900">
                    Signup
                  </span>
                </button>
                <Link to="/login" type="reset" className="-ml-3 w-max p-3">
                  <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                    Already have an account
                  </span>
                </Link>
              </div>
            </form>
          </div>
          <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
            <div className="space-x-4 text-center">
              <span>&copy; Guidant</span>
              <a
                href="/"
                className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
              >
                Contact
              </a>
              <a
                href="/"
                className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
              >
                accountType & Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
