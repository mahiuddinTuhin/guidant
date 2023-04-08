import { format } from "date-fns";
import React from "react";

// import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function AppointingCalander({ selectedDate, setSelectedDate }) {
  //   let footer = <p>Please pick a day.</p>;
  //   if (selected) {
  //     footer = <p>You picked {format(selected, 'PP')}.</p>;
  //   }
  return (
    <div className="mx-12">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        //   footer={footer}
      />
      <p>You have selected date: {format(selectedDate, "PPPP")}</p>
    </div>
  );
}
