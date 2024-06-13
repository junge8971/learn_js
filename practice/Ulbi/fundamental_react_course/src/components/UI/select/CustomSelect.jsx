import React from "react";

export default function CustomSelect({
  options,
  default_value,
  value,
  onChange,
  ...props
}) {
  return (
    <select
      {...props}
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      <option disabled value="">
        {default_value}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
