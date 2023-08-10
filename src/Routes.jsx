import React from "react";
import App from "./App";
import { navigationConstants } from "./Constants/NavigationConstants";

export const routes = () => [
  {
    path: "/",
    children: [
      {
        path: `${navigationConstants?.home}`,
        element: <App main={navigationConstants?.home} />,
      },
      {
        path: `${navigationConstants?.character}`,
        element: <App main={navigationConstants?.character} />,
      },
      {
        path: `${navigationConstants?.world}`,
        children: [
          { path: "", element: <App main={navigationConstants?.world} /> },
          {
            path: `${navigationConstants?.city}`,
            element: <App main={navigationConstants?.city} />,
          },
        ],
      },
    ],
  },
];
