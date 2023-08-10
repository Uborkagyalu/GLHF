import React from "react";
import { Box } from "@mui/material";
import { useDrop } from "react-dnd";
import { useMoveItemFunction } from "../hooks/useMoveItemFunction";
import { inventoryItemTypes } from "../Constants/InventoryItemTypes";

const ItemSlot = ({
  sx,
  slotType,
  id = undefined,
  children = [],
  character,
  setCharacter,
}) => {
  const { moveItemFunction } = useMoveItemFunction({ character, setCharacter });

  const moveItem = (it) => {
    moveItemFunction(it?.slotId, it?.item, id);
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: inventoryItemTypes?.[slotType === "inventory" ? slotType : id],
      drop: (dropped) => {
        moveItem(dropped);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <Box
      className={"draggable"}
      ref={drop}
      style={{
        opacity: isOver ? 0.5 : 1,
        cursor: "grab !important",
      }}
      sx={{
        ...sx,
      }}
    >
      {children.length > 0 && children}
    </Box>
  );
};

export default ItemSlot;
