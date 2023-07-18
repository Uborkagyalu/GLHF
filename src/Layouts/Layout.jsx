import React from "react";
import { Grid } from "@mui/material";
import { layoutConstants } from "../Constants/LayoutConstants";
import paperBackground from "../img/paperBackground.png";
import LeftMenu from "./LeftMenu";
import CharacterPanel from "./CharacterPanel";
import { navigationConstants } from "../Constants/NavigationConstants";
import World from "./World";

const Layout = ({ main }) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        sx={{
          bgcolor: "red",
          height: layoutConstants()?.topBarHeight,
          position: "absolute",
          width: "100vw",
        }}
      ></Grid>
      <Grid
        item
        container
        xs={12}
        sx={{
          height: "100vh",
          paddingTop: layoutConstants()?.topBarHeight,
        }}
      >
        <Grid
          item
          sx={{
            width: layoutConstants()?.leftMenuWidth,
            position: "absolute",
          }}
          style={{ height: `calc(100% - ${layoutConstants()?.topBarHeight}` }}
        >
          <LeftMenu />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: "100%",
            padding: "10px 10px 10px 0",
            backgroundImage: `url(${paperBackground}) !important`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "100% 100% !important",
          }}
          style={{
            paddingLeft: `calc(${layoutConstants()?.leftMenuWidth} + 10px)`,
          }}
        >
          {main === navigationConstants()?.character && <CharacterPanel />}
          {main === navigationConstants()?.world && <World />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
