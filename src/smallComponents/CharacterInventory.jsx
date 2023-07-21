import React, { useContext } from "react";
import { Grid } from "@mui/material";
import slot2 from "../img/slot2.png";
import slot1 from "../img/slot1.png";
import Item from "./Item";
import ItemSlot from "./ItemSlot";
import { CharacterContext } from "../providers/characterProvider";

const CharacterInventory = () => {
  const { character } = useContext(CharacterContext);
  console.log(character);

  const getEquipmentChildren = (slotId) => [
    ...(character?.equipment?.find((slot) => slot?.id === slotId)?.item
      ? [
          <Item
            key={slotId}
            item={
              character?.equipment?.find((slot) => slot?.id === slotId)?.item
            }
            slotType={"equipment"}
            slotId={slotId}
          />,
        ]
      : []),
  ];

  return (
    <Grid
      container
      item
      direction={"column"}
      alignItems={"center"}
      padding={2}
      spacing={2}
    >
      <Grid item>
        <ItemSlot
          slotType="equipment"
          id="head"
          sx={{
            width: "80px",
            height: "80px",
            backgroundImage: `url(${slot1}) !important`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "100% 100% !important",
          }}
          children={getEquipmentChildren("head")}
        />
      </Grid>
      <Grid
        container
        item
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
      >
        <Grid item>
          <ItemSlot
            slotType="equipment"
            id="mainHand"
            sx={{
              width: "80px",
              height: "80px",
              backgroundImage: `url(${slot1}) !important`,
              backgroundRepeat: "no-repeat !important",
              backgroundSize: "100% 100% !important",
            }}
            children={getEquipmentChildren("mainHand")}
          />
        </Grid>
        <Grid item>
          <ItemSlot
            slotType="equipment"
            id="torso"
            sx={{
              width: "80px",
              height: "80px",
              backgroundImage: `url(${slot1}) !important`,
              backgroundRepeat: "no-repeat !important",
              backgroundSize: "100% 100% !important",
            }}
            children={getEquipmentChildren("torso")}
          />
        </Grid>
        <Grid item>
          <ItemSlot
            slotType="equipment"
            id="offHand"
            sx={{
              width: "80px",
              height: "80px",
              backgroundImage: `url(${slot1}) !important`,
              backgroundRepeat: "no-repeat !important",
              backgroundSize: "100% 100% !important",
            }}
            children={getEquipmentChildren("offHand")}
          />
        </Grid>
      </Grid>
      <Grid container item justifyContent={"center"} spacing={2}>
        <Grid item>
          <ItemSlot
            slotType="equipment"
            id="mainHandRing"
            sx={{
              width: "38px",
              height: "38px",
              backgroundImage: `url(${slot2}) !important`,
              backgroundRepeat: "no-repeat !important",
              backgroundSize: "100% 100% !important",
            }}
            children={getEquipmentChildren("mainHandRing")}
          />
        </Grid>
        <Grid item>
          <ItemSlot
            slotType="equipment"
            id="legs"
            sx={{
              width: "80px",
              height: "80px",
              backgroundImage: `url(${slot1}) !important`,
              backgroundRepeat: "no-repeat !important",
              backgroundSize: "100% 100% !important",
            }}
            children={getEquipmentChildren("legs")}
          />
        </Grid>
        <Grid item>
          <ItemSlot
            slotType="equipment"
            id="offHandRing"
            sx={{
              width: "38px",
              height: "38px",
              backgroundImage: `url(${slot2}) !important`,
              backgroundRepeat: "no-repeat !important",
              backgroundSize: "100% 100% !important",
            }}
            children={getEquipmentChildren("offHandRing")}
          />
        </Grid>
      </Grid>
      <Grid container item justifyContent={"center"} sx={{ width: "60%" }}>
        {character?.inventory?.map((inv) => {
          return (
            <Grid item xs={1.25} key={inv?.id}>
              <ItemSlot
                slotType={"inventory"}
                id={inv?.id}
                sx={{
                  width: "100%",
                  height: "38px",
                  backgroundImage: `url(${slot2}) !important`,
                  backgroundRepeat: "no-repeat !important",
                  backgroundSize: "100% 100% !important",
                }}
                children={[
                  ...(inv?.item
                    ? [
                        <Item
                          key={inv?.item?.id}
                          item={inv?.item}
                          slotType={"inventory"}
                          slotId={inv?.id}
                        />,
                      ]
                    : []),
                ]}
              ></ItemSlot>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default CharacterInventory;
