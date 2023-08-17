import React from "react";
import { Box, Grid } from "@mui/material";
import Text from "./Text";

const SkillInfoBox = ({ skillPoints, selectedSkill }) => {
  return (
    <Box
      sx={{
        position: "sticky",
        left: 0,
        top: 0,
        width: "300px",
        color: "white",
        backgroundColor: "#212121",
        zIndex: 1,
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Text>{`Skillpoints: ${skillPoints}`}</Text>
        </Grid>
        <Grid item xs={12}>
          <Text>{selectedSkill?.name}</Text>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillInfoBox;
