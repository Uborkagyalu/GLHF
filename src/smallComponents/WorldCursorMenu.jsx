import { ListItemIcon, MenuItem, MenuList, Paper } from "@mui/material";
import React from "react";
import Text from "./Text";
import arrow from "../img/arrow.png";
import paperBackground from "../img/paperBackground.png";
import { useNavigate } from "react-router-dom";

const WorldCursorMenu = ({ cursorMenu }) => {
  const navigate = useNavigate();
  return (
    <>
      {cursorMenu?.open && (
        <Paper
          sx={{
            position: "absolute",
            top: `${cursorMenu?.top}px`,
            left: `${cursorMenu?.left}px`,
            backgroundImage: `url(${paperBackground}) !important`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "100% 100% !important",
            border: "3px solid #a8945b",
            padding: "5px",
          }}
        >
          <Text variant={"h5"}>{cursorMenu?.point?.name}</Text>
          <Text>{cursorMenu?.point?.description}</Text>
          <MenuList>
            <MenuItem onClick={() => navigate(cursorMenu?.point?.url)}>
              <ListItemIcon>
                <img className={"mirrorHoriz"} src={arrow} alt="->" />
              </ListItemIcon>
              <Text>{`Go to ${cursorMenu?.point?.name}`}</Text>
            </MenuItem>
          </MenuList>
        </Paper>
      )}
    </>
  );
};

export default WorldCursorMenu;
