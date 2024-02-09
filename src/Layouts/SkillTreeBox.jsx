import { Grid } from "@mui/material";
import React from "react";

const SkillTreeBox = ({ children, moving, setMoving }) => {
  const skillTreeBox = React.useRef(null);

  const [left, setLeft] = React.useState(0);
  const [top, setTop] = React.useState(0);

  const widthBoundary = skillTreeBox?.current?.clientWidth / 2;
  const heightBoundary = skillTreeBox?.current?.clientHeight / 2;

  React.useEffect(() => {
    if (skillTreeBox?.current) {
      setLeft((skillTreeBox?.current?.clientWidth / 4) * -1);
      setTop((skillTreeBox?.current?.clientHeight / 4) * -1);
    }
  }, []);

  const onMouseDown = () => {
    setMoving(true);
  };

  const onMouseUp = () => {
    setMoving(false);
  };

  const onMouseMove = (e) => {
    if (moving) {
      const deltaX = e.movementX;
      const deltaY = e.movementY;
      setLeft(
        left + deltaX < 0 && left + deltaX > widthBoundary * -1
          ? left + deltaX
          : left
      );
      setTop(
        top + deltaY < 0 && top + deltaY > heightBoundary * -1
          ? top + deltaY
          : top
      );
    }
  };

  return (
    <Grid
      container
      className={"skillTreeBox"}
      ref={skillTreeBox}
      sx={{
        height: "200%",
        width: "200%",
        position: "absolute",
        left: left,
        top: top,
        cursor: moving ? "move" : "pointer",
      }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Grid>
  );
};

export default SkillTreeBox;
