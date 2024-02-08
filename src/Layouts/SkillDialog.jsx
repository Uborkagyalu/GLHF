import { Dialog, DialogContent, Grid } from "@mui/material";
import React from "react";
import { useMainSkillTreeConfig } from "../configs/SkillTreeConfigs/useMainSkillTreeConfig";
import SkillInfoBox from "../smallComponents/SkillInfoBox";
import SkillSlot from "../smallComponents/SkillSlot";
import SkillTreeBox from "./SkillTreeBox";
import SkillTreeHexa from "./SkillTreeHexa";

const SkillDialog = ({ open, handleClose, skills, skillPoints }) => {
  console.log(skills);
  console.log(skillPoints);

  const [selectedSkill, setSelectedSkill] = React.useState(null);

  const skillTree = useMainSkillTreeConfig();

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
      <DialogContent
        sx={{
          width: "1500px",
          height: "800px",
          backgroundColor: "#212121",
          color: "white",
          padding: "18px",
          boxShadow: `
            inset #786e59 0 0 0 5px,
            inset #968a6f 0 0 0 1px,
            inset #ab9d7e 0 0 0 10px
          `,
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <SkillInfoBox
            skillPoints={skillPoints}
            selectedSkill={selectedSkill}
          />
          <SkillTreeBox>
          <SkillTreeHexa />
          {/* {skillTree?.map((tree) => (
              <Grid
                item
                container
                sx={{
                  backgroundColor: tree?.color,
                  width: "50%",
                  height: "50%",
                  padding: "20px",
                }}
                // @ts-ignore
                direction={tree?.colDirection}
              >
                {tree?.skills?.map((col) => (
                  <Grid
                    item
                    container
                    // @ts-ignore
                    direction={tree?.rowDirection}
                  >
                    {col?.colSkills?.map((skill) => (
                      <Grid item sx={{ margin: "20px" }}>
                        <SkillSlot
                          skill={skill}
                          setSelectedSkill={setSelectedSkill}
                        />
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </Grid>
            ))} */}
          </SkillTreeBox>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillDialog;
