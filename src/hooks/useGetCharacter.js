import { characterStatConstants } from "../Constants/CharacterStatConstants";

export const useGetCharacter = () => {
  return {
    name: "Bélabácsi",
    sex: "Male",
    cast: "Warrior",
    level: 1,
    totalXp: 105,
    stats: [
      { name: characterStatConstants()?.life, min: 0, max: 10, current: 4 },
      { name: characterStatConstants()?.mana, min: 0, max: 100, current: 6 },
      { name: characterStatConstants()?.stamina, min: 0, max: 100, current: 11 },
    ],
  };
};
