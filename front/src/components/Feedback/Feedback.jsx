import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { createFeedback } from "../../redux/actions/feedbacksAC/feedbacksAC";
import "./Feedback.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Feedback() {
  const photos = useSelector((store) => store.photos);
  const user = useSelector((store) => store.user);
  const [activeStep, setActiveStep] = React.useState(0);
  const [input, setInput] = React.useState({});
  const dispatch = useDispatch();

  const addFeedback = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submit = () => {
    dispatch(createFeedback(input, user.id));
    setInput(prev => ({...prev, feedback: ""}));
  };

  const theme = useTheme();

  const steps = photos?.feedbackPhoto;
  const maxSteps = steps?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="feedbackpage">
      <div className="feedbackBox">
        <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {steps ? (
              steps.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        display: "block",
                        maxWidth: 600,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.url}
                      alt="..."
                    />
                  ) : null}
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps ?? 0}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>
      <div className="feedbackInputBox">
        <h2>
          <FormattedMessage id="feedbackpage" />
        </h2>
        <div className="inputAddCell">
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Your feedback here"
              variant="filled"
              name="feedback"
              id="fullWidth"
              className="feedbackInput"
              required
              onChange={addFeedback}
              value={input.feedback}
            />
          </Box>
          <Fab size="small" color="secondary" aria-label="add">
            <AddIcon onClick={submit} />
          </Fab>
        </div>
      </div>
    </div>
  );
}
