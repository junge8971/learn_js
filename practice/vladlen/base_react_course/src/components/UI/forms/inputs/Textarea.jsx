import classes from "./Textarea.module.css";

export const Textarea = ({ error, ...props }) => {
  return (
    <textarea
      className={
        error ? `${classes.textarea} ${classes.error}` : classes.textarea
      }
      {...props}
    />
  );
};
