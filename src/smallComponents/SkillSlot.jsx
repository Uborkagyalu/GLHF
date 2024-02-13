import React from "react";
import { Box, Tooltip } from "@mui/material";

const SkillSlot = ({ skill, setSelectedSkill }) => {
  return (
    <div className={"hexaImgContainerBox"}>
      <div
        className={"hexaImgContainer"}
        onClick={() => setSelectedSkill(skill)}
      >
        {skill?.imgUrl && (
          <Tooltip title={skill?.name}>
            <Box
              sx={{
                width: "80%",
                display: "block",
              }}
              component={"img"}
              src={require("../img/skills/" + skill.imgUrl)}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default SkillSlot;
