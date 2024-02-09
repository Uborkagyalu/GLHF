import React from "react";
import { Box, Tooltip } from "@mui/material";

const SkillSlot = ({ skill, setSelectedSkill }) => {
  return (
    <div className={"hexaImgContainerBox"}>
      <div className={"hexaImgContainer"}>
        {skill?.imgUrl && (
          <Tooltip title={skill?.name}>
            <Box
              sx={{
                width: "80%",
                display: "block",
              }}
              component={"img"}
              src={require("../img/skills/" + skill.imgUrl)}
              onClick={() => setSelectedSkill(skill)}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default SkillSlot;
