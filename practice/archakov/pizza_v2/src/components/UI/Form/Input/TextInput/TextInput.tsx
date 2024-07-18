import { ChangeEvent, FC, memo } from "react";

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInputComponent: FC<TextInputProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  return <input placeholder={placeholder} onChange={onChange} value={value} />;
};

export const TextInput = memo(TextInputComponent);
