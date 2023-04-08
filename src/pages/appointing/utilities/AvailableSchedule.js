import React, { useEffect } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointingLog } from "../../../features/appointing/appointingSlice";
const AvailableSchedule = ({ teacher, selectedDate }) => {
  const dispatch = useDispatch();

  const formattedDateStr = format(
    new Date(selectedDate.toString()),
    "MMM dd yyyy"
  );

  const { appointing, isLoading } =
    useSelector((state) => state.appointingLog) || {};

  useEffect(() => {
    dispatch(fetchAppointingLog());
  }, []);

  const {
    id,
    // name,
    // institute,
    // position,
    // experience,
    // department,
    // courses,
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
  const isAppointed = !isLoading
    ? appointing?.slice().map((item) => {
        const appoints =
          item?.t_id === id && item.date === formattedDateStr ? item : null;
        return appoints;
      })
    : [];

  // modal

  return (
    <div>
      <div className="container max-w-3xl px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <h1>Selected Date: {format(selectedDate, "PPPP")}</h1>
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
                      const isBooked = isAppointed.find(
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
                              <span className="relative">{`${
                                !isBooked ? "Available" : "Not Available"
                              }`}</span>
                            </span>
                          </td>
                          <td className="px-2 md:px-5 py-5 text-sm bg-white border-b border-gray-200 flex justify-center">
                            <button
                              to="/login"
                              type="button"
                              title="Start buying"
                              disabled={isBooked}
                              className={`flex justify-center items-center py-1 px-2 md:py-3 md:px-6 text-center rounded-full transition  ${
                                !isBooked
                                  ? "bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800"
                                  : "bg-gray-400 dark:bg-gray-700 "
                              }`}
                            >
                              <span className="block text-white text-xs md:text-sm">
                                {`${
                                  !isBooked
                                    ? "Get Appointment"
                                    : "Not Available"
                                }`}
                              </span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSchedule;
