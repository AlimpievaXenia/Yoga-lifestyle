import React, { useEffect, useMemo } from "react";
import ImageMapper from "react-img-mapper";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../redux/actions/introductionPractices/introductionPractices";
import { CardModal } from "../Modal/Modal";
import figure from "./D1.JPG";
import "./Practices.css";

export default function Practices() {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [arr, setArr] = React.useState([]);
  const [selectedTheme, setSelectedTheme] = React.useState(null);

  const videoData = useSelector((store) => store.videos);
  const dispatch = useDispatch();

  const src = useMemo(() => {
    if (!selectedTheme) return;
    console.log(selectedTheme, 'selectedTheme')
    console.log(Object.values(videoData), 'Object.values(videoData)')
    const video = Object.values(videoData).find(
      ({ IntroductionPractice }) => IntroductionPractice.theme === selectedTheme
    );
    

    return video.url;
  }, [selectedTheme]);

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  useEffect(() => {
    console.log(arr, "coords");
  }, [arr]);

  const onMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const onAreaClick = (data) => {
    console.log(data, 'data')
    setSelectedTheme(data.title)
  };
  const handleCloseModal = () => setSelectedTheme(null);

  const onClick = () => {
    setArr((prev) => [...prev, coords.x - 252, coords.y]);
  };

  return (
    <div className="practicesPage">
      {/* <div style={{ position: "absolute", zIndex: 100 }}>
        <div>X {coords.x - 252}</div>
        <p>{" ---/--- "}</p>
        <div>Y {coords.y}</div>
      </div> */}

      <div onClick={onClick} onMouseMove={onMouseMove} className="boxPractices">
        <ImageMapper
          className="figurePict"
          src={figure}
          parentWidth={window.innerWidth - 500}
          responsive
          // height={window.innerHeight}
          onClick={onAreaClick}
          map={{
            name: "map",
            areas: [
              {
                id: "1",
                title: "head",
                shape: "poly",
                name: "1",
                fillColor: "rgba(161,21,207,0.2)",
                strokeColor: "black",
                coords: [
                  1174, 489, 1202, 486, 1226, 471, 1246, 463, 1268, 460, 1295,
                  470, 1320, 488, 1333, 509, 1336, 535, 1334, 554, 1325, 563,
                  1301, 568, 1277, 570, 1264, 570, 1253, 574, 1231, 573, 1212,
                  570, 1203, 551, 1182, 548, 1174, 521, 1165, 489,
                ],
              },
              {
                id: "2",
                title: "body",
                shape: "poly",
                name: "2",
                fillColor: "rgba(161,21,207,0.2)",
                strokeColor: "black",
                coords: [
                  1109, 444, 1127, 518, 1123, 632, 1086, 642, 1052, 659, 1008,
                  593, 950, 556, 975, 524, 993, 504, 1013, 491, 1051, 473, 1102,
                  448,
                ],
              },
              {
                id: "3",
                title: "legs",
                shape: "poly",
                name: "3",
                fillColor: "rgba(161,21,207,0.2)",
                strokeColor: "black",
                coords: [
                  877, 677, 839, 748, 804, 805, 767, 881, 752, 901, 741, 930,
                  701, 994, 630, 1083, 672, 1109, 699, 1074, 737, 1035, 759,
                  1019, 786, 977, 797, 950, 845, 894, 878, 854, 939, 783, 958,
                  787, 995, 825, 1035, 861, 1079, 908, 1120, 948, 1166, 979,
                  1201, 1011, 1270, 1070, 1294, 1092, 1321, 1070, 1301, 1041,
                  1257, 986, 1204, 937, 1161, 902, 1128, 857, 1099, 801, 1075,
                  757, 1064, 741, 1000, 734, 939, 707, 879, 672,
                ],
              },
              {
                id: "4",
                title: "meditation",
                shape: "poly",
                name: "4",
                fillColor: "rgba(161,21,207,0.2)",
                strokeColor: "black",
                coords: [
                  945, 565, 987, 588, 1014, 621, 1053, 669, 1055, 691, 1061,
                  714, 1064, 737, 1032, 732, 991, 727, 958, 716, 927, 698, 899,
                  679, 882, 662, 896, 639, 912, 618, 928, 592, 947, 561,
                ],
              },
              {
                id: "5",
                title: "hands",
                shape: "poly",
                name: "5",
                fillColor: "rgba(161,21,207,0.2)",
                strokeColor: "black",
                coords: [
                  1109, 443, 1117, 464, 1133, 466, 1162, 477, 1170, 466, 1181,
                  442, 1191, 413, 1218, 370, 1242, 394, 1266, 427, 1282, 455,
                  1295, 465, 1319, 478, 1329, 477, 1328, 471, 1315, 459, 1301,
                  439, 1283, 404, 1270, 373, 1246, 329, 1232, 308, 1214, 314,
                  1194, 331, 1172, 356, 1156, 381, 1140, 408, 1126, 427, 1110,
                  441,
                ],
              },
              {
                id: "5",
                title: "hands",
                shape: "poly",
                name: "5",
                fillColor: "rgba(161,21,207,0.2)",
                strokeColor: "black",
                coords: [
                  1130, 593, 1133, 610, 1142, 629, 1141, 658, 1139, 686, 1140,
                  724, 1140, 749, 1138, 757, 1142, 790, 1150, 832, 1156, 863,
                  1163, 894, 1175, 913, 1199, 930, 1219, 943, 1214, 932, 1203,
                  918, 1197, 891, 1195, 867, 1191, 848, 1191, 818, 1192, 794,
                  1192, 778, 1184, 737, 1182, 702, 1185, 677, 1191, 652, 1197,
                  631, 1199, 605, 1199, 595, 1191, 578, 1173, 576, 1152, 578,
                  1141, 584, 1135, 589,
                ],
              },
            ],
          }}
        />
      </div>
      <CardModal src={src} theme={selectedTheme} onClose={handleCloseModal} />
    </div>
  );
}
