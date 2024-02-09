// ha középen x
// bal-fent x-30
// jobb-fent x-29
// balra x-1
// jobbra x+1
// bal-lent x+29
// jobb-lent x+30

import {
  hexaBL,
  hexaBR,
  hexaL,
  hexaR,
  hexaTL,
  hexaTR,
} from "../../utils/common";

export const useMainHexaSkillTreeConfig = () => {
  return [
    {
      skillId: 191,
      connects: (id) => [
        hexaTL(id),
        hexaTR(id),
        hexaL(id),
        hexaR(id),
        hexaBL(id),
      ],
      req: (id) => [],
      name: "Energy",
      imgUrl: "ball.png",
    },
    {
      skillId: 194,
      connects: (id) => [
        hexaTL(id),
        hexaTR(id),
        hexaL(id),
        hexaR(id),
        hexaBR(id),
      ],
      req: (id) => [],
      name: "Body",
      imgUrl: "personal.png",
    },
    {
      skillId: 278,
      connects: (id) => [
        hexaTL(id),
        hexaTR(id),
        hexaL(id),
        hexaBL(id),
        hexaBR(id),
      ],
      req: (id) => [],
      name: "Substance",
      imgUrl: "earthquake.png",
    },
    {
      skillId: 284,
      connects: (id) => [
        hexaTL(id),
        hexaTR(id),
        hexaR(id),
        hexaBL(id),
        hexaBR(id),
      ],
      req: (id) => [],
      name: "MartialArts",
      imgUrl: "sword.png",
    },
    {
      skillId: 368,
      connects: (id) => [
        hexaTL(id),
        hexaL(id),
        hexaR(id),
        hexaBL(id),
        hexaBR(id),
      ],
      req: (id) => [],
      name: "Nature",
      imgUrl: "tree.png",
    },
    {
      skillId: 371,
      connects: (id) => [
        hexaTR(id),
        hexaL(id),
        hexaR(id),
        hexaBL(id),
        hexaBR(id),
      ],
      req: (id) => [],
      name: "Mind",
      imgUrl: "cross.png",
    },
  ];
};
