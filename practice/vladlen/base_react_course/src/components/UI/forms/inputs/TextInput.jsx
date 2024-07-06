import classes from "./TextInput.module.css";

export const TextInput = ({ error, ...props }) => {
  return (
    <input
      className={
        error ? `${classes.textInput} ${classes.error}` : classes.textInput
      }
      {...props}
    />
  );
};
