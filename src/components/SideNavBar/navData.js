import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

export const navData = [
  {
    title: "Main",
    path: "/home",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Customer List",
    path: "/",
    icon: <PeopleIcon />,
    cName: "nav-text",
  },
  {
    title: "More Info",
    path: "/info",
    icon: <InfoIcon />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
    cName: "nav-text",
  },
];
