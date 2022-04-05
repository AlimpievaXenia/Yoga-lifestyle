import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { practices } from "../../data";
import "./Yoga.css";

export default function Yoga() {
  const photos = useSelector((store) => store.photos);

  return (
    <>
      <div className="textsBox">
        <p className="yogapageTextOne">
          <FormattedMessage id="yogapageTextOne" />
        </p>
        <p className="yogapageTextTwo">
          <FormattedMessage id="yogapageTextTwo" />
        </p>
        <div className="bookArea">
          <p className="yogapageTextThree">
            <FormattedMessage id="yogapageTextThree" />
          </p>
          <Link to={"/book"}>
            <div className="buttonInCategory">
              <button className="buttonCategory">
                <FormattedMessage id="buttonBookNow" />
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="categoriesList">
        {practices.map((practice, index) => {
          return (
            <Card
              sx={{ maxWidth: 700, height: 1130 }}
              id={practice.id}
              key={practice.id}
              className="categoryCard"
            >
              <CardMedia
                component="img"
                height="900"
                image={photos.practicesPhoto?.[index].url}
                alt="..."
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="TitleCategory"
                >
                  <FormattedMessage id={"practice_" + practice.type} />
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  className="textInCardCategory"
                >
                  <FormattedMessage id={"practice_" + practice.id} />
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
