import React from "react";

// импортируем стили, как объект
import classes from "./CustomButton.module.css";

export default function CustomButton({ children, ...props }) {
  return (
    <button className={classes.custom_button} {...props}>
      {/* children это вложенные элементы компонента */}
      {children}
    </button>
  );
}
