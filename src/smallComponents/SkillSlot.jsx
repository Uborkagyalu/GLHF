import React from "react";
import { Box, Tooltip } from "@mui/material";

const SkillSlot = ({ skill, setSelectedSkill }) => {
  return (
    <Tooltip title={skill?.name}>
      <Box
        sx={{
          width: "38px",
          height: "38px",
          cursor: "pointer",
        }}
        component={"img"}
        src={require("../img/skills/" + skill?.imgUrl)}
        onClick={() => setSelectedSkill(skill)}
      />
    </Tooltip>
  );
};

export default SkillSlot;
