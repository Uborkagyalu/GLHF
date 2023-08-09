export const useMoveItemFunction = ({ character, setCharacter }) => {
  const moveItemFunction = (fromId, what, toId) => {
    console.log(fromId);
    console.log(what);
    console.log(toId);

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

    console.log(character);
    console.log(inventoryMap);
    console.log(equipmentMap);

    setCharacter({
      ...character,
      inventory: inventoryMap,
      equipment: equipmentMap,
    });
  };

  return { moveItemFunction };
};
