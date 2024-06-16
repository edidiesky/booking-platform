import React, { useEffect, useLayoutEffect } from "react";
import Navbar from "../common/navbar";
import MainContent from "./main/maincontent";
import Footer from "../common/Footer";
import Newsletter from "../common/Newsletter";
import { useDispatch, useSelector } from "react-redux";
import { GetUserReservations } from "@/features/reservation/reservationReducer";
import { useParams, useNavigate } from "react-router-dom";
import { handleClearPayment } from "@/features/payment/paymentSlice";
import { UpdatePaymentToSuccess } from "@/features/payment/paymentReducer";
const HomeIndex = () => {
  const dispatch = useDispatch();
    const { payment } = useSelector((store) => store.payment);
  const navigate = useNavigate()
  const { id } = useParams();
  // UpdatePaymentToSuccess
  // GetSinglePaymentHistory
  useLayoutEffect(() => {
    // dispatch(GetUserReservations());
    dispatch(handleClearPayment());
    // verify the payment route
    if (id) {
      dispatch(UpdatePaymentToSuccess(id));
    }
  }, []);

  // if(!payment) {
  //   navigate('/')
  // }
  return (
    <div className="bg-[var(--light-grey)] w-full flex flex-col">
      <Navbar />
      <div className="w-full flex relative gap-4">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default HomeIndex;
