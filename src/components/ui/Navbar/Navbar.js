import { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [cssStyles, setCssStyles] = useState({});

  const sidebarClickHandler = () => {
    let mainElem = document.getElementById("main");

    if (Object.entries(cssStyles).length) {
      setCssStyles({});
      mainElem.style.width = "100%";
    } else {
      setCssStyles({ width: "20%" });
      mainElem.style.width = "80%";
    }
  };

  return (
    <>
      <nav>
        <ul className={classes.horizontal}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/"
              exact={`${true}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/dashboard/browse"
            >
              Dashboard
            </NavLink>
          </li>
          <li
            className="float-end p-2"
            style={{ cursor: "pointer" }}
            onClick={sidebarClickHandler}
          >
            <span className="m-3">&#9776;</span>
          </li>
        </ul>
        <ul>
          <li>
            <Sidebar
              cssStyles={cssStyles}
              sidebarToggle={sidebarClickHandler}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
