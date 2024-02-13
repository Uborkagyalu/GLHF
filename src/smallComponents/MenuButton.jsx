import * as React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import button1 from "../img/button1.png";
import button2 from "../img/button2.png";
import button3 from "../img/button3.png";
import button4 from "../img/button4.png";

const StyledMenuButton = styled(Button)(({ theme }) => ({
  width: "100% !important",
  backgroundImage: `url(${button1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  "&:active": {
    backgroundImage: `url(${button2}) !important`,
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "100% 100% !important",
  },
  "&:focus": {
    backgroundImage: `url(${button3})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  "&:hover": {
    backgroundImage: `url(${button3})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  "&:disabled": {
    backgroundImage: `url(${button4}) !important`,
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "100% 100% !important",
    color: "#aaaaaa !important",
  },
}));

export default function MenuButton({ children, sx, ...props }) {
  return (
    <StyledMenuButton
      {...props}
      disableRipple
      sx={{ color: "white", height: "50px", ...sx }}
    >
      {children}
    </StyledMenuButton>
  );
}
