import React, { useState } from "react";
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { navData } from "./navData";
import "./Navbar.css";

export default function Navbar() {
  const [expandSidebar, setExpandSideBar] = useState(false);

  const toggleExpandSidebar = () => setExpandSideBar(!expandSidebar);

  return (
    <>
      <div className={expandSidebar ? "sideNav" : "sidenavClosed"}>
        <button className={"menuBtn"} onClick={toggleExpandSidebar}>
          {expandSidebar ? (
            <KeyboardDoubleArrowLeft />
          ) : (
            <KeyboardDoubleArrowRight />
          )}
        </button>
        {navData.map((item, index) => {
          return (
            <NavLink key={index} className={item.cName} to={item.path}>
              {item.icon}
              <span className={expandSidebar ? "linkText" : "linkTextClosed"}>
                {item.title}
              </span>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
