import { Typography } from "@mui/material";
import React from "react";

const Text = ({ children, variant = "h6" }) => {
  return (
    <Typography
      sx={{
        fontFamily: "papyrus",
        fontWeight: "bold",
      }}
      // @ts-ignore
      variant={variant}
    >
      {children}
    </Typography>
  );
};

export default Text;
