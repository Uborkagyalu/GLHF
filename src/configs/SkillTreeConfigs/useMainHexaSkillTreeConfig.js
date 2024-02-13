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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
};
