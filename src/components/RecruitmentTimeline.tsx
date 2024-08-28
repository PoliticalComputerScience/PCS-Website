import { useTheme } from "@mui/material/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { recruitmentSteps } from "../../public/data";
import { ArrowForward } from "@mui/icons-material";

const PcsConnector = () => {
  const theme = useTheme();
  return (
    <StepLabel sx={{ color: theme.palette.secondary.light, p:2 }} icon={<span />}>
      <ArrowForward
        preserveAspectRatio={"none"}
        sx={{ color: theme.palette.secondary.light }}
      />
    </StepLabel>
  );
};

const RecruitmentTimeline = () => {
  const theme = useTheme();

  const renderDate = (start: Date, end: Date) => {
    if (start.getTime() == end.getTime()) {
      return start.toLocaleDateString();
    } else {
      return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
    }
  };

  const bigscreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Stepper
    sx ={{p: 2}}
        connector={<PcsConnector />}
        nonLinear
        orientation={bigscreen ? "horizontal" : "vertical"}
      >
        {recruitmentSteps.map(({ name, start, end }) => (
          <Step key={name} completed={false} sx={{ maxWidth: "20rem"}}>
            <StepLabel
              StepIconProps={{
                sx: {
                  color: theme.palette.secondary.light,
                },
              }}
            >
            <Box sx={{color: theme.palette.primary.main}}>
              <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
              <Typography variant='subtitle2'>{renderDate(start, end)}</Typography>
            {/*<Typography variant='body2'>{description}</Typography>*/}
            </Box>
            </StepLabel>
          </Step>
        ))}

        {/*       <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
      <Button
             color="inherit"
             disabled={activeStep === 0}
             onClick={handleBack}
             sx={{ mr: 1 }}
      >
      Back
             </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button onClick={handleNext} sx={{ mr: 1 }}>
      Next
             </Button>
      </Box>*/}
      </Stepper>
    </Box>
  );
};

export default RecruitmentTimeline;
