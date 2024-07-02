import React from "react";
import classes from "./CustomLoader.module.css";

export default function CustomLoader(props) {
  return (
    <div className={classes.loader_wrapper}>
      <div className={classes.loader}></div>
    </div>
  );
}
