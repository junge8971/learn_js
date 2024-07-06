import { Button } from "../UI/Buttons/Button";
import classes from "./ContentSelector.module.css";

export const ContentSelector = ({
  setVisibleContent,
  registeredContent,
  visibleContent,
}) => {
  return (
    <nav className={classes.ContentSelector}>
      {registeredContent.map((content) => {
        return (
          <Button
            key={content.type}
            onClick={() => setVisibleContent(content.type)}
            isActive={content.type == visibleContent}
          >
            {content.title}
          </Button>
        );
      })}
    </nav>
  );
};
