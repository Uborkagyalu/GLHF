import { Box, Grid } from "@mui/material";
import React from "react";
import mockPortrait from "../img/mockPortrait.jpg";

const CharacterPortrait = () => {
  return (
    <Grid container item spacing={2} padding={1} xs={3}>
      <Grid item>
        <Box
          component="img"
          sx={{
            width: "100%",
          }}
          alt="Portrait"
          src={mockPortrait}
        />
      </Grid>
    </Grid>
  );
};

export default CharacterPortrait;
