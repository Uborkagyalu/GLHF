import { useContext } from "react";
import { CharacterContext } from "../providers/characterProvider";

export const useMoveItemFunction = () => {
  const { character, setCharacter } = useContext(CharacterContext);

  const moveItemFunction = (fromId, what, toId) => {
    const inventoryMap = character?.inventory?.map((inv) => {
      if (inv?.id === fromId) return { ...inv, item: null };
      if (inv?.id === toId) return { ...inv, item: what };
      return inv;
    });

    const equipmentMap = character?.equipment?.map((slot) => {
      if (slot?.id === fromId) return { ...slot, item: null };
      if (slot?.id === toId) return { ...slot, item: what };
      return slot;
    });

    setCharacter({
      ...character,
      inventory: inventoryMap,
      equipment: equipmentMap,
    });
  };

  return { moveItemFunction };
};
