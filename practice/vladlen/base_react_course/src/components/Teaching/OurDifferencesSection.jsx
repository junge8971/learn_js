import { useState } from "react";

import { Button } from "../UI/Buttons/Button";

export const OurDifferencesSection = () => {
  const [contentType, setContentType] = useState("");

  const differences = [
    { title: "Подход", type: "way", content: "Some way" },
    { title: "Доступность", type: "easy", content: "Very easy" },
    { title: "Концентрация", type: "program", content: "Some program" },
  ];

  const handleContentChange = (type) => {
    setContentType(type);
  };
  return (
    <section>
      <h3>Наши отличия от других</h3>

      {differences.map((diff) => (
        <Button
          key={diff.type}
          isActive={diff.type === contentType}
          onClick={() => handleContentChange(diff.type)}
        >
          {diff.title}
        </Button>
      ))}

      {!contentType ? (
        <div>Нажмите на копку</div>
      ) : (
        <div>
          {differences.map((diff) =>
            diff.type === contentType ? diff.content : null
          )}
        </div>
      )}
    </section>
  );
};
