import React from "react";
import { Box } from "@mui/material";
import { useDrag } from "react-dnd";

const Item = ({ item, slotType, slotId }) => {
  const img = require("../img/Items/" + item?.imgUrl);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { item: { ...item }, slotId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      className={"draggable"}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? "grabbing !important" : "grab !important",
      }}
      sx={{
        width: "80%",
        height: "80%",
        padding: "10%",
      }}
      component={"img"}
      src={img}
    />
  );
};

export default Item;
