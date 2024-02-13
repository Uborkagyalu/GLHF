import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import Text from "./Text";
import { CharacterContext } from "../providers/characterProvider";
import MenuButton from "./MenuButton";

const SkillInfoBox = ({ skills, skillPoints, selectedSkill }) => {
  const { addNewSkill } = useContext(CharacterContext);

  const skillsIncludeAllReq = () => {
    const reqs = selectedSkill.req(selectedSkill.skillId);
    let valid = true;
    reqs.forEach((req) => {
      if (!skills.includes(req)) valid = false;
    });
    return valid;
  };

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
      <Grid container direction={"column"}>
        <Grid item>
          <Text variant={"h4"}>{`Skillpoints: ${skillPoints}`}</Text>
        </Grid>
        <Grid item alignSelf={"center"}>
          <Text>{selectedSkill?.name}</Text>
        </Grid>
        <Grid item>
          <Text>{selectedSkill?.description}</Text>
        </Grid>
        {selectedSkill &&
          !skills.includes(selectedSkill.skillId) &&
          skillsIncludeAllReq() && (
            <Grid item alignSelf={"center"}>
              <MenuButton
                onClick={() => addNewSkill(selectedSkill.skillId)}
                sx={{ width: "150px !important", height: "30px !important" }}
                disabled={skillPoints === 0}
              >
                Learn
              </MenuButton>
            </Grid>
          )}
      </Grid>
    </Box>
  );
};

export default SkillInfoBox;
