import React from "react";

import classes from "./Footer.module.css";
import cssLayout from "../css/layout.module.css";

const Footer = () => {
  return (
    <>
      <footer
        className={[classes.footer, cssLayout["footer-background-color"]].join(
          " "
        )}
      >
        <p className={classes.copyright}>© GROUP TITLE 2021</p>
      </footer>
    </>
  );
};

export default Footer;
