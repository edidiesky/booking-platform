"use client";
import React, { useState } from "react";
import RoomsList from "./customerlist";
const DashboardIndex = () => {
  const [roommodal, setRoomModal] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full pb-20 flex flex-col gap-12">
        <div className="w-full grid lg:grid-cols-2 lg:items-center gap-4 justify-between">
          <h3 className="text-3xl font-bold font-booking_font_normal">
            Customers List
            <span className="block pt-2 text-base font-normal font-booking_font_normal">
              Make a review of your customers either by adding or modifying
              their content
            </span>
          </h3>
        </div>
        <RoomsList />
      </div>
    </div>
  );
};

export default DashboardIndex;