import { format } from "date-fns";
import React, { useState } from "react";

// import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function AppointingCalander() {
  const [selected, setSelected] = useState(new Date());

  //   let footer = <p>Please pick a day.</p>;
  //   if (selected) {
  //     footer = <p>You picked {format(selected, 'PP')}.</p>;
  //   }
  return (
    <div className="mx-12">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        //   footer={footer}
      />
      <p>You have selected date: {format(selected, "PPPP")}</p>
    </div>
  );
}
