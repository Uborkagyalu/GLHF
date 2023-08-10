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

  const ItemSlotWrapper = ({
    slotType,
    id,
    img,
    height,
    width,
    children = undefined,
  }) => (
    <CharacterContext.Consumer>
      {({ character: char, setCharacter: setChar }) => (
        <ItemSlot
          slotType={slotType}
          id={id}
          sx={{
            width: width,
            height: height,
            backgroundImage: `url(${img}) !important`,
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "100% 100% !important",
          }}
          children={children ? children : getEquipmentChildren(id)}
          character={char}
          setCharacter={setChar}
        />
      )}
    </CharacterContext.Consumer>
  );

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
        <ItemSlotWrapper
          slotType="equipment"
          id="head"
          img={slot1}
          width={"80px"}
          height={"80px"}
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
          <ItemSlotWrapper
            slotType="equipment"
            id="mainHand"
            img={slot1}
            width={"80px"}
            height={"80px"}
          />
        </Grid>
        <Grid item>
          <ItemSlotWrapper
            slotType="equipment"
            id="torso"
            img={slot1}
            width={"80px"}
            height={"80px"}
          />
        </Grid>
        <Grid item>
          <ItemSlotWrapper
            slotType="equipment"
            id="offHand"
            img={slot1}
            width={"80px"}
            height={"80px"}
          />
        </Grid>
      </Grid>
      <Grid container item justifyContent={"center"} spacing={2}>
        <Grid item>
          <ItemSlotWrapper
            slotType="equipment"
            id="mainHandRing"
            img={slot2}
            width={"38px"}
            height={"38px"}
          />
        </Grid>
        <Grid item>
          <ItemSlotWrapper
            slotType="equipment"
            id="legs"
            img={slot1}
            width={"80px"}
            height={"80px"}
          />
        </Grid>
        <Grid item>
          <ItemSlotWrapper
            slotType="equipment"
            id="offHandRing"
            img={slot2}
            width={"38px"}
            height={"38px"}
          />
        </Grid>
      </Grid>
      <Grid container item justifyContent={"center"} sx={{ width: "60%" }}>
        {character?.inventory?.map((inv) => {
          return (
            <Grid item xs={1.25} key={inv?.id}>
              <ItemSlotWrapper
                slotType="inventory"
                id={inv?.id}
                img={slot2}
                height={"38px"}
                width={"100%"}
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
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default CharacterInventory;
