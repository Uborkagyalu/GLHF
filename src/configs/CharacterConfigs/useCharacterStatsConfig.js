import { characterStatConstants } from "../../Constants/CharacterStatConstants";

export const useCharacterStatsConfig = ({ character = {} }) => {
  const getStatData = (stat) => {
    // @ts-ignore
    const current = character?.stats?.find((s) => s?.name === stat);
    return {
      min: current?.min,
      max: current?.max,
      current: current?.current,
    };
  };

  return [
    {
      id: 1,
      text: characterStatConstants()?.life,
      ...getStatData(characterStatConstants()?.life),
      color: "red",
    },
    {
      id: 2,
      text: characterStatConstants()?.mana,
      ...getStatData(characterStatConstants()?.mana),
      color: "blue",
    },
    {
      id: 3,
      text: characterStatConstants()?.stamina,
      ...getStatData(characterStatConstants()?.stamina),
      color: "yellow",
    },
  ];
};
