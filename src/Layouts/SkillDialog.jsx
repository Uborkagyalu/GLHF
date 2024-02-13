import { Dialog, DialogContent, Grid } from "@mui/material";
import React, { useContext } from "react";
import { CharacterContext } from "../providers/characterProvider";
import SkillInfoBox from "../smallComponents/SkillInfoBox";
import SkillTreeBox from "./SkillTreeBox";
import SkillTreeHexa from "./SkillTreeHexa";

const SkillDialog = ({ open, handleClose }) => {
  const { character } = useContext(CharacterContext);

  const [selectedSkill, setSelectedSkill] = React.useState(null);
  const [moving, setMoving] = React.useState(false);

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
            skills={character.skills}
            skillPoints={character.skillPoints}
            selectedSkill={selectedSkill}
          />
          <SkillTreeBox moving={moving} setMoving={setMoving}>
            <SkillTreeHexa
              moving={moving}
              setSelectedSkill={setSelectedSkill}
            />
          </SkillTreeBox>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SkillDialog;
