import React from "react";

import classes from "./Footer.module.css";
import cssLayout from "../css/layout.module.css";

const Footer = () => {
  return (
    <>
      <footer
        className={[classes.footer, cssLayout["footer-background-color"], "fixed-bottom"].join(
          " "
        )}
      >
        <p className={classes.copyright}>© HAPPIEST MINDS TECHNOLOGIES 2021</p>
      </footer>
    </>
  );
};

export default Footer;
