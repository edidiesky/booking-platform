import React, { lazy } from "react";

const Customers = lazy(() => import("./pages/customers"));
const Reservation = lazy(() => import("./pages/reservation"));
const Rooms = lazy(() => import("./pages/rooms"));
const Statistics = lazy(() => import("./pages/statistics"));
const CreateRoom = lazy(() => import("./pages/create-room"));

export { Rooms, Statistics, Customers, Reservation, CreateRoom };