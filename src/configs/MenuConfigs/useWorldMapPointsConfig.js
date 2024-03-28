import { navigationConstants } from "../../Constants/NavigationConstants";

export const useWorldMapPointsConfig = () => {
  return [
    {
      id: "1",
      name: "City1",
      description: "The walled city capital of this region",
      sx: { width: "5.5%", height: "6.5%", left: "38%", top: "32%" },
      url: `${navigationConstants.city}`,
      imgUrl: "castle.png",
      paths: ['city1_city2']
    },
    {
      id: "2",
      name: "City2",
      description: "The walled city capital of this region",
      sx: { width: "5.5%", height: "6.5%", left: "74%", top: "48%" },
      url: `${navigationConstants.city}`,
      imgUrl: "castle.png",
      paths: ['city1_city2']
    },
  ];
};
