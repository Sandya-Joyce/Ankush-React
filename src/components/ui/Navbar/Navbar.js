import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const Navbar = () => {
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
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
