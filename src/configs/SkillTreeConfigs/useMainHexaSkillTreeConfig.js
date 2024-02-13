// ha középen x
// bal-fent x-30
// jobb-fent x-29
// balra x-1
// jobbra x+1
// bal-lent x+29
// jobb-lent x+30

/*
mage: energy
enhancer: energy+self
hermit: self
warrior: self+martial
weapon master: martial
rogue: martial+mind
priest: mind
summoner: mind+nature
druid: nature
sage: nature+substance
transmuter: substance
elementalist: substance+energy
*/

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
      exclude: [284, 368, 371],
      name: "Energy",
      imgUrl: "ball.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      skillId: 192,
      connects: (id) => [hexaTR(id)],
      req: (id) => [hexaL(id)],
      exclude: [],
      name: "Contain",
      imgUrl: "contain.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      skillId: 193,
      connects: (id) => [hexaTL(id)],
      req: (id) => [hexaR(id)],
      name: "Enhance",
      imgUrl: "shield.png",
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
      exclude: [],
      name: "Self",
      imgUrl: "personal.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      skillId: 219,
      connects: (id) => [hexaL(id), hexaTL(id)],
      req: (id) => [hexaR(id), hexaBR(id)],
      exclude: [],
      name: "Elementalist",
      imgUrl: "ice.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      skillId: 220,
      connects: (id) => [hexaL(id)],
      req: (id) => [hexaTR(id)],
      exclude: [],
      name: "Void",
      imgUrl: "arrows-circle.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      skillId: 249,
      connects: (id) => [hexaTL(id)],
      req: (id) => [hexaBL(id)],
      exclude: [],
      name: "Water",
      imgUrl: "wind.png",
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
      exclude: [],
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
      exclude: [],
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
      exclude: [],
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
      exclude: [],
      name: "Mind",
      imgUrl: "cross.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
};
