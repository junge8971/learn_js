import { useEffect, useState } from "react";

import { TextInput } from "../UI/forms/input/TextInput";

export const SearchFrom = ({ filterCallback }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    filterCallback(value);
  }, [value]);
  return (
    <TextInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Искать скамину"
    />
  );
};
