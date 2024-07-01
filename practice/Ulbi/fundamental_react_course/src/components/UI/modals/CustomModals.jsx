import React from "react";
import classes from "./CustomModal.module.css";

export default function CustomModal({ visible, set_modal_window_visable, ...props }) {
  let classes_for_modal = [classes.custom_modal];
  if (visible) {
    classes_for_modal.push(classes.active);
  }
  return (
    <div
      className={classes_for_modal.join(" ")}
      onClick={() => {
        set_modal_window_visable(false);
      }}
    >
      <div
        className={classes.custom_modal_content}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}
