export const useMoveItemFunction = ({ character, setCharacter }) => {
  const moveItemFunction = (fromId, what, toId) => {
    const toSlot =
      character?.inventory?.find((s) => s?.id === toId) ||
      character?.equipment?.find((s) => s?.id === toId);

    let inventoryMap;
    let equipmentMap;

    if (toSlot?.item === null) {
      inventoryMap = character?.inventory?.map((inv) => {
        if (inv?.id === fromId) return { ...inv, item: null };
        if (inv?.id === toId) return { ...inv, item: what };
        return inv;
      });

      equipmentMap = character?.equipment?.map((slot) => {
        if (slot?.id === fromId) return { ...slot, item: null };
        if (slot?.id === toId) return { ...slot, item: what };
        return slot;
      });
    } else {
      inventoryMap = character?.inventory?.map((inv) => {
        if (inv?.id === fromId) return { ...inv, item: toSlot?.item };
        if (inv?.id === toId) return { ...inv, item: what };
        return inv;
      });

      equipmentMap = character?.equipment?.map((slot) => {
        if (slot?.id === fromId) return { ...slot, item: toSlot?.item };
        if (slot?.id === toId) return { ...slot, item: what };
        return slot;
      });
    }

    setCharacter({
      ...character,
      inventory: inventoryMap,
      equipment: equipmentMap,
    });
  };

  return { moveItemFunction };
};
