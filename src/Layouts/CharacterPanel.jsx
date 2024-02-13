import React, { useContext } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import CharacterPortrait from "../smallComponents/CharacterPortrait";
import { useCharacterStatsConfig } from "../configs/CharacterConfigs/useCharacterStatsConfig";
import Text from "../smallComponents/Text";
import ColoredStatBar from "../smallComponents/ColoredStatBar";
import slot from "../img/slot2.png";
import CharacterInventory from "../smallComponents/CharacterInventory";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CharacterContext } from "../providers/characterProvider";
import { useDialogControl } from "../hooks/useDialogControl";
import SkillDialog from "./SkillDialog";

const CharacterPanel = () => {
  const { character } = useContext(CharacterContext);
  const characterStats = useCharacterStatsConfig({ character });

  const [characterTab, setCharacterTab] = React.useState("inventory");

  const {
    open: skillDialogOpen,
    openDialog: openSkillDialog,
    closeDialog: closeSkillDialog,
    props: skillDialogProps,
  } = useDialogControl();

  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "calc(100% - 10px)",
        margin: "10px",
        boxShadow: `
          inset #786e59 0 0 0 5px,
          inset #968a6f 0 0 0 1px,
          inset #ab9d7e 0 0 0 10px
        `,
      }}
    >
      <Grid item container xs={12}>
        <Text variant={"h3"}>Character Information</Text>
      </Grid>
      <Grid item container spacing={3} marginBottom={2} xs={12}>
        <Grid item container xs={6}>
          <Grid
            item
            direction={"column"}
            alignItems={"center"}
            container
            xs={1}
          >
            <Grid item>
              <IconButton onClick={() => setCharacterTab("inventory")}>
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  alt="Inv"
                  src={slot}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => {
                  openSkillDialog();
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  alt="Skill"
                  src={slot}
                />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={11}
            sx={{
              boxShadow: `
              inset #786e59 0 0 0 5px,
              inset #968a6f 0 0 0 1px,
              inset #ab9d7e 0 0 0 10px
            `,
            }}
            padding={"2px"}
          >
            {characterTab === "inventory" && (
              <DndProvider backend={HTML5Backend}>
                <CharacterInventory />
              </DndProvider>
            )}
          </Grid>
        </Grid>
        <Grid item container xs={6}>
          <Grid
            item
            container
            xs={11}
            sx={{
              boxShadow: `
              inset #786e59 0 0 0 5px,
              inset #968a6f 0 0 0 1px,
              inset #ab9d7e 0 0 0 10px
            `,
            }}
            padding={"2px"}
          >
            {/* <CharacterPortrait /> */}
            <Grid
              item
              container
              spacing={2}
              padding={1}
              direction={"column"}
              xs={9}
            >
              <Grid item>
                <Text variant={"h3"}>{character?.name}</Text>
              </Grid>
              <Grid item>
                <Text variant={"h5"}>
                  {`${character?.sex} ${character?.cast}`}
                </Text>
              </Grid>
              <Grid item>
                <Text variant={"h5"}>
                  {`Level: ${character?.level} (XP: ${character?.totalXp})`}
                </Text>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction={"column"}
              spacing={1}
              padding={2}
              xs={12}
            >
              {characterStats?.map((stat) => (
                <Grid item container spacing={1} key={stat?.id}>
                  <Grid item xs={3}>
                    <Text variant={"h5"}>{stat?.text}</Text>
                  </Grid>
                  <Grid item xs={6} container alignItems={"center"}>
                    <ColoredStatBar stat={stat} />
                  </Grid>
                  <Grid item xs={3}>
                    <Text
                      variant={"h5"}
                    >{`${stat?.current}/${stat?.max}`}</Text>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            direction={"column"}
            alignItems={"center"}
            container
            xs={1}
          ></Grid>
        </Grid>
      </Grid>
      {skillDialogOpen && (
        <SkillDialog
          open={skillDialogOpen}
          handleClose={closeSkillDialog}
          {...skillDialogProps}
        />
      )}
    </Grid>
  );
};

export default CharacterPanel;
