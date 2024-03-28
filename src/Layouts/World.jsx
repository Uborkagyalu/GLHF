import { Box, Grid } from "@mui/material";
import React from "react";
import { useWorldMapPointsConfig } from "../configs/MenuConfigs/useWorldMapPointsConfig";
import world from "../img/world2.jpg";
import WorldCursorMenu from "../smallComponents/WorldCursorMenu";

const World = () => {
  const [cursorMenu, setCursorMenu] = React.useState({
    open: false,
    top: 0,
    left: 0,
    point: null,
  });

  const closeMenu = () => {
    setCursorMenu({ ...cursorMenu, open: false });
  };

  const mapPointClickHandler = (e, point) => {
    e.stopPropagation();
    setCursorMenu({
      open: true,
      top: e.clientY + 10,
      left: e.clientX + 20,
      point: point,
    });
  };

  const worldMapPoints = useWorldMapPointsConfig();

  return (
    <>
      <Grid
        container
        sx={{
          width: "calc(100% - 10px)",
          height: "calc(100% - 10px)",
          margin: "10px",
          boxShadow: `
      inset #786e59 0 0 0 5px,
      inset #968a6f 0 0 0 1px,
      inset #ab9d7e 0 0 0 10px
     `,
          backgroundImage: `url(${world}) !important`,
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "100% 100% !important",
          position: "relative",
        }}
        onClick={closeMenu}
      >
        {worldMapPoints?.map((point) => (
          <Box
            key={point?.id}
            className={"mapPoint"}
            sx={{
              display: "block",
              borderRadius: "10%",
              ...point?.sx,
            }}
            component={"img"}
            src={require("../img/" + point.imgUrl)}
          />
          // <Grid
          //   key={point?.id}
          //   className={"mapPoint"}
          //   onClick={(e) => mapPointClickHandler(e, point)}
          //   sx={{
          //     width: point?.sx?.width,
          //     height: point?.sx?.height,
          //     left: point?.sx?.left,
          //     top: point?.sx?.top,
          //     borderRadius: "40%",
          //   }}
          // />
        ))}
      </Grid>
      <WorldCursorMenu cursorMenu={cursorMenu} />
    </>
  );
};

export default World;
