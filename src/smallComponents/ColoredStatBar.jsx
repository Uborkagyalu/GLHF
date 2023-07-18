import { Grid } from "@mui/material";
import React from "react";

const ColoredStatBar = ({ stat }) => {
  const getValue = (s) => {
    const result = (s?.current / s?.max) * 100;
    return result;
  };
  return (
    <Grid
      item
      container
      style={{
        width: "100%",
        height: "70%",
        border: "5px solid #786e59",
      }}
    >
      <Grid
        item
        sx={{ width: `${getValue(stat)}%`, backgroundColor: stat?.color }}
      ></Grid>
    </Grid>
  );
};

export default ColoredStatBar;
