import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Sidebar.module.css";

const Sidebar = ({ cssStyles, sidebarToggle }) => {
  return (
    <div className={classes.sidenav} style={cssStyles} onClick={sidebarToggle}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/dashboard/add"
      >
        Add Status
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/dashboard/browse"
      >
        Browse Status
      </NavLink>
    </div>
  );
};

export default Sidebar;
