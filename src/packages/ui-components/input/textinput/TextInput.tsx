import { TextFieldProps } from "@mui/material";
import { TextInputField } from "./TextInput.styles";

interface TextInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  inputAdornment?: React.ReactNode;
  fullWidth?: boolean;
  type?: TextFieldProps["type"];
  helperText?: string;
}
export const TextInput: React.FunctionComponent<TextInputProps> = ({
  placeholder,
  onChange,
  value,
  disabled,
  fullWidth,
  inputAdornment,
}) => {
  return (
    <TextInputField
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      fullWidth={fullWidth}
      disableUnderline
      startAdornment={inputAdornment}
    />
  );
};
