import React, { createContext } from "react";
import { characterStatConstants } from "../Constants/CharacterStatConstants";
import { inventoryItemTypes } from "../Constants/InventoryItemTypes";

const defaultValues = {
  name: "Bélabácsi",
  sex: "Male",
  cast: "Warrior",
  level: 1,
  totalXp: 105,
  stats: [
    { name: characterStatConstants?.life, min: 0, max: 10, current: 4 },
    { name: characterStatConstants?.mana, min: 0, max: 100, current: 6 },
    {
      name: characterStatConstants?.stamina,
      min: 0,
      max: 100,
      current: 11,
    },
  ],
  skillPoints: 2,
  skills: [],
  inventory: [
    { id: 1, item: null },
    {
      id: 2,
      item: {
        id: 200,
        name: "Sword",
        imgUrl: "minus.png",
        type: inventoryItemTypes?.mainHand,
      },
    },
    {
      id: 3,
      item: {
        id: 201,
        name: "Sword2",
        imgUrl: "arrow.png",
        type: inventoryItemTypes?.mainHand,
      },
    },
    { id: 4, item: null },
    { id: 5, item: null },
    { id: 6, item: null },
    { id: 7, item: null },
    { id: 8, item: null },
    { id: 9, item: null },
    { id: 10, item: null },
    { id: 11, item: null },
    { id: 12, item: null },
    { id: 13, item: null },
    { id: 14, item: null },
    { id: 15, item: null },
    { id: 16, item: null },
    { id: 17, item: null },
    { id: 18, item: null },
  ],
  equipment: [
    { id: "head", item: null },
    { id: "torso", item: null },
    { id: "mainHand", item: null },
    { id: "offHand", item: null },
    { id: "legs", item: null },
    { id: "mainHandRing", item: null },
    { id: "offHandRing", item: null },
  ],
};

export const CharacterContext = createContext(defaultValues);

const CharacterProvider = (props) => {
  const [character, setCharacter] = React.useState(defaultValues);

  const addNewSkillPoint = () => {
    const newSkillPoints = character.skillPoints + 1;
    setCharacter({ ...character, skillPoints: newSkillPoints });
  };

  const addNewSkill = (skillId) => {
    if (!character.skills.includes(skillId) && character.skillPoints > 0) {
      const newSkillPointSet = [...character.skills];
      newSkillPointSet.push(skillId);
      const newSkillPoints = character.skillPoints - 1;
      setCharacter({
        ...character,
        skills: newSkillPointSet,
        skillPoints: newSkillPoints,
      });
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        setCharacter,
        addNewSkillPoint,
        addNewSkill,
      }}
      {...props}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
