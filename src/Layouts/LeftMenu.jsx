import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLeftMenuConfig } from "../configs/MenuConfigs/useLeftMenuConfig";
import MenuButton from "../smallComponents/MenuButton";

const LeftMenu = () => {
  const buttons = useLeftMenuConfig();
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} padding={1}>
      {buttons?.map((button) => (
        <Grid item xs={12} key={button?.id}>
          <MenuButton onClick={() => navigate(button?.url)}>
            {button?.text}
          </MenuButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default LeftMenu;
