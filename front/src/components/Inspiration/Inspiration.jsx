import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";
import deepDream from "../../media/deepDream.mp3";
import peaceOfMind from "../../media/peaceOfMind.mp3";
import sakura from "../../media/sakura.mp3";
import "./Inspiration.css";

export default function Inspiration() {
  const sounds = [sakura, peaceOfMind, deepDream];
  const photos = useSelector((store) => store.photos);

  return (
    <>
      <div className="inspirationArea">
        {sounds.map((sound, index) => {
          return (
            <Card
              sx={{ maxWidth: 522 }}
              id={sound.id}
              key={index}
              className="inspireCard"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="800"
                  image={photos.inspirationPhoto?.[index].url}
                  alt="..."
                />
                <CardContent className="inspirationCard">
                  <Typography variant="body2" color="text.secondary">
                    <audio controls src={sound}></audio>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
}
