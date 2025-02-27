// Packages
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
// Components
import BookingForm from "./BookingForm";
// Helpers
import { fetchAPI, submitAPI } from "../../../utils/fakeAPI";
import pages from "../../../utils/pages";
// Assets
import "./styles.scss";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate(pages.confirmedBooking.path);
  };

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitData={submitData} />
    </div>
  );
};

export default Bookings;
