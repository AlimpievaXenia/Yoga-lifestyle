import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { practices } from "../../data";
import { addBooking } from "../../redux/actions/bookingAC/bookingAC";
import "./Booking.css";
import pict from "./IMG_0169.JPG";

export default function Booking() {
  const [date, setDate] = React.useState();
  const [trainingType, setTrainingType] = React.useState();

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDatePicker = (value) => {
    const date = format(value, "yyyy-MM-dd HH:mm");
    setDate(date);
  };

  const getBookData = (id, type) => {
    const practiceType = { id, type };
    setTrainingType(practiceType);
  };

  const handleBooking = () => {
    dispatch(addBooking(date, trainingType, user.id));
    navigate("/cabinet");
  };

  return (
    <>
      <img src={pict} className="mainPict" />
      <div className="containerBooking">
        <div className="bookDate">
          <h1>
            <FormattedMessage id="bookDate" />
          </h1>
          <div className="picker">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Select time and date"
                value={date}
                onChange={handleDatePicker}
              />
            </LocalizationProvider>
          </div>
          <div>
            <p>
              <FormattedMessage id="chooseTrainingType" />
            </p>
            {date &&
              practices.map((practice) => (
                <Button
                  color="secondary"
                  key={practice.type}
                  onClick={() => getBookData(practice.id, practice.type)}
                >
                  <FormattedMessage id={"practice_" + practice.type} />
                </Button>
              ))}
          </div>
        </div>
        <div className="containerBookSum">
          <h1>
            <FormattedMessage id="bookingSummary" />
          </h1>
          <p>
            <FormattedMessage id="dateBooking" /> : {date}
          </p>
          <p>
            <FormattedMessage id="typeOfPracticeBooking" /> :{" "}
            {trainingType && (
              <FormattedMessage id={"practice_" + trainingType?.type} />
            )}
          </p>
          <Button
            onClick={handleBooking}
            color="secondary"
            className="buttonBooking"
          >
            <FormattedMessage id="buttonBooking" />
          </Button>
          <p>
            <FormattedMessage id="member" />?
          </p>
          <Link href="/login" color="secondary">
            <FormattedMessage id="loginBooking" />
          </Link>
        </div>
      </div>
    </>
  );
}
