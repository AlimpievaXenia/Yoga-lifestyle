import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EditIcon from "@mui/icons-material/Edit";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { showBookings } from "../../redux/actions/bookingsAC/bookingsAC";
import { getUserPhoto } from "../../redux/actions/userAC/userAC";
import { CardModal } from "../ModalGuides/ModalGuides";
import "./PersonalCabinet.css";


export default function PersonalCabinet() {
  const user = useSelector((store) => store.user);
  const bookings = useSelector((store) => store.bookings);
  const [photo, setPhoto] = useState({});

  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(showBookings(user));
  }, [user]);

  const submitPhoto = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", photo);

    const response = await fetch("/user/photo", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    dispatch(getUserPhoto(result));
  };

  const uploadPhoto = async (event) => {
    const photo = event.target.files[0];
    setPhoto(photo);
  };

  console.log(user, "user");

  return (
    <div className="personalCabinetPage">
      <div className="cabinetPage">
        <div className="personalInfoBox">
          {user.photo ? (
            <Avatar
              alt="..."
              src={user.photo}
              className="avatar"
              sx={{ width: 136, height: 136 }}
            >
              <AddAPhotoIcon />
            </Avatar>
          ) : (
            <div className="avatarWithoutPhoto">
              <Avatar
                alt="..."
                src={user.photo}
                className="avatar"
                sx={{ width: 136, height: 136 }}
              >
                <AddAPhotoIcon />
              </Avatar>
              <div className="addPhotoInput">
                <TextField
                  type="file"
                  name="file"
                  accept="image/*"
                  id="avatar"
                  className="avatar_Data"
                  onChange={uploadPhoto}
                ></TextField>
                <EditIcon
                  onClick={submitPhoto}
                  type="submit"
                  className="editIcon"
                />
              </div>
            </div>
          )}
          <div className="personalInfo">
            <h2>
              <FormattedMessage id="personalcabinetpageData" />:
            </h2>
            <p>
              {user.firstname} {user.lastname}
            </p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>
        <div className="bookings">
          <div className="prevBook">
            <h2 className="titleBooking">
              <FormattedMessage id="personalcabinetpagePrev" />:
            </h2>
            {bookings.prevBookingsOfUser?.map((book) => (
              <li className="bookingOfUser">
                {book.Practice.type === "individual" ? (
                  <PersonIcon className="personIcon" />
                ) : (
                  <GroupsIcon className="groupIcon" />
                )}
                {book.date}{" "}
                <FormattedMessage id={"practice_" + book.Practice.type} />
              </li>
            ))}
          </div>
          <div className="futureBook">
            <h2 className="titleBooking">
              <FormattedMessage id="personalcabinetpageCurr" />:
            </h2>
            {bookings.nextBookingsOfUser?.map((b) => (
              <li className="bookingOfUser">
                {b.Practice.type === "individual" ? (
                  <PersonIcon className="personIcon" />
                ) : (
                  <GroupsIcon className="groupIcon" />
                )}
                {b.date} <FormattedMessage id={"practice_" + b.Practice.type} />
              </li>
            ))}
          </div>
        </div>
        <div>
          <div onClick={() => setOpen(true)} className="pdfGuide">oils</div>
          <CardModal
            file={open}
            onClose={() => setOpen(false)}
            onLoadSuccess={onDocumentLoadSuccess}
            pageNumber={pageNumber}
            numPages={numPages}
          />
        </div>
      </div>
    </div>
  );
}
