import React from "react";
import Navbar from "../Navbar/Navbar";

import classes from "./Header.module.css";
import cssLayout from "../css/layout.module.css";

const Header = () => {
  return (
    <>
      <header
        className={[classes.header, cssLayout["header-background-color"]].join(
          " "
        )}
      >
        <Navbar />
      </header>
    </>
  );
};

export default Header;
