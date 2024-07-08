import { memo } from "react";

export const PageIntro = memo(() => {
  return (
    <div>
      <h1>Title</h1>
      <h2>Текст</h2>
    </div>
  );
});

PageIntro.displayName = "PageIntro";
