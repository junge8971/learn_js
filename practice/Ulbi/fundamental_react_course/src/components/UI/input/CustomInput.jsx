import React from "react";
import classes from "./CustomInput.module.css";

export default function CustomInput(props) {
  return <input className={classes.custom_input} {...props} />;
}
