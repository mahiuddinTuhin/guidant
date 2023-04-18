import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./Modal";
import {
  fetchAppointingLog,
  postAppointingLog,
} from "../../../features/appointing/appointingApi";
import Loader from "../../shared/loader/Loader";
import Error from "../../shared/Error/Error";
const AvailableSchedule = ({ teacher, selectedDate }) => {
  // for checking modal open or not
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  // const firstCourse = teacher.courses && teacher.courses[0];
  const [selectedCourse, setSelectedCourse] = useState(null);

  // set first course with useeffect as beacuse async data fetching
  useEffect(() => {
    setSelectedCourse(teacher.courses && teacher?.courses[0]);
  }, [teacher]);

  const dispatch = useDispatch();

  // format the date that got from user selection
  const formattedDateStr = format(
    new Date(selectedDate.toString()),
    "MMM dd yyyy"
  );

  const { appointing, isLoading } =
    useSelector((state) => state.appointingLog) || {};

  useEffect(() => {
    // dispatching to get appointing log
    dispatch(fetchAppointingLog());
    // console.log(isModalOpen);
  }, [dispatch, isModalOpen]);

  const {
    id,
    name,
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
    timeSlots,
  } = teacher;

  // finding the teacher's appinted log on this day
  let isAppointed = [];

  if (Array.isArray(appointing)) {
    isAppointed =
      appointing &&
      appointing.map((item) => {
        const appoints =
          item?.t_id === id && item.date === formattedDateStr ? item : null;
        return appoints;
      });
  }

  // modal
  const handleModalToggle = (time) => {
    setSelectedTime(time);
    setIsModalOpen(!isModalOpen);
    dispatch(fetchAppointingLog());
  };

  // handle course change
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  // handleCourseSubmit

  const handleCourseSubmit = (e, date) => {
    e.preventDefault();
    const randomId = Math.random().toString(36).substring(2, 8);

    const info = {
      t_id: teacher.id,
      s_id: randomId,
      date,
      time: selectedTime,
      course: selectedCourse,
    };

    dispatch(postAppointingLog(info));

    handleModalToggle();
  };

  let content = null;
  if (isLoading) {
    content = <Loader />;
  }
  if (!isLoading && appointing.length === 0) {
    content = <Error />;
  }
  if (!isLoading && appointing?.length > 0) {
    content = (
      <div className="py-8 rounded-lg">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 shadow-md">
          <div className="inline-block min-w-full overflow-hidden rounded-lg text-center">
            <h1 className="mb-8 font-bold">
              Selected Date: {format(selectedDate, "PPPP")}
            </h1>
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-2 md:px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-2 md:px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-2 md:px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Appointing
                  </th>
                </tr>
              </thead>
              <tbody>
                {timeSlots &&
                  timeSlots?.map((time) => {
                    // checking if the time is available or not
                    const isBooked = isAppointed?.find(
                      (item) => item?.time === time
                    );

                    return (
                      <tr key={time}>
                        <td className="px-2 md:px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {time}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 md:px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                            ></span>
                            <span
                              className={`relative ${
                                isBooked && "text-rose-700"
                              }`}
                            >{`${
                              !isBooked ? "Available" : "Not Available"
                            }`}</span>
                          </span>
                        </td>
                        <td className="px-2 md:px-5 py-5 text-sm bg-white border-b border-gray-200 flex justify-center">
                          <button
                            onClick={() => handleModalToggle(time)}
                            type="button"
                            title="Start buying"
                            disabled={isBooked}
                            className={`flex justify-center items-center py-1 px-2 md:py-3 md:px-6 text-center rounded-full transition  ${
                              !isBooked
                                ? "bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800"
                                : "bg-gray-400 dark:bg-gray-400 text-slate-500"
                            }`}
                          >
                            <span className="block text-white text-xs md:text-sm">
                              {`${
                                !isBooked ? "Get Appointment" : "Not Available"
                              }`}
                            </span>
                          </button>
                          {/* modal component to call */}
                          <Modal
                            isOpen={isModalOpen}
                            onClose={handleModalToggle}
                            info={(name, courses, id)}
                          >
                            <h2 className="text-2xl font-bold">
                              Instructor: {name}
                            </h2>
                            <h2 className="text-lg mb-4">
                              {teacher.position} in {teacher?.institute}
                            </h2>
                            <h3 className="text-gray-700 text-base mb-4">
                              Selected Date: {formattedDateStr}
                              <br />
                              Selected Time: {selectedTime}
                            </h3>
                            {/* select course */}
                            <div className="w-full space-y-0.5 mb-8">
                              <h1 className="inline-block text-xl">
                                Select Course:
                              </h1>
                              <select
                                id="course"
                                name="course"
                                value={selectedCourse}
                                className="inline-block ml-8 mb-8 truncate rounded-md border-gray-800 pr-8 text-sm md:text-lg transition 
                                  ring-blue-600 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                                onChange={handleCourseChange}
                              >
                                {teacher?.courses?.map((c, id) => {
                                  return (
                                    <option
                                      key={id}
                                      defaultValue={`${id === 0}`}
                                      value={c}
                                    >
                                      {c}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <button
                              type="submit"
                              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                              onClick={(e) =>
                                handleCourseSubmit(e, formattedDateStr)
                              }
                            >
                              Submit
                            </button>
                          </Modal>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container max-w-3xl px-4 mx-auto sm:px-8 ">{content}</div>
    </div>
  );
};

export default AvailableSchedule;
