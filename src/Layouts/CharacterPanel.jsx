import React from "react";
import { Grid } from "@mui/material";
import CharacterPortrait from "../smallComponents/CharacterPortrait";
import { useGetCharacter } from "../hooks/useGetCharacter";
import { useCharacterStatsConfig } from "../configs/CharacterConfigs/useCharacterStatsConfig";
import Text from "../smallComponents/Text";
import ColoredStatBar from "../smallComponents/ColoredStatBar";

const CharacterPanel = () => {
  const character = useGetCharacter();
  const characterStats = useCharacterStatsConfig({ character });

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
      <Grid item xs={12}>
        <Text variant={"h3"}>Character Information</Text>
      </Grid>
      <Grid item container xs={6}>
        <Grid item container xs={1}></Grid>
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
        ></Grid>
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
        >
          <CharacterPortrait />
          <Grid
            item
            container
            xs={9}
            spacing={2}
            padding={1}
            direction={"column"}
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
          xs={12}
          direction={"column"}
          spacing={1}
          padding={2}
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
                <Text variant={"h5"}>{`${stat?.current}/${stat?.max}`}</Text>
              </Grid>
            </Grid>
          ))}
        </Grid>
        </Grid>
        <Grid item container xs={1}></Grid>

      </Grid>
    </Grid>
  );
};

export default CharacterPanel;
