import { navigationConstants } from "../../Constants/NavigationConstants";

export const useWorldMapPointsConfig = () => {
  return [
    {
      id: "1",
      name: "City",
      description: "The walled city capital of this region",
      sx: { width: "11%", height: "13%", left: "38%", top: "32%" },
      url: `${navigationConstants.city}`,
    },
  ];
};
