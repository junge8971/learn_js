import classes from "./Button.module.css";

export const Button = ({ children, isActive, ...props }) => {
  return (
    <button
      className={
        isActive ? [classes.button, classes.active].join(" ") : classes.button
      }
      {...props}
    >
      {children}
    </button>
  );
};
