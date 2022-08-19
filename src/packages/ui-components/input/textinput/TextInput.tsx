import { TextFieldProps } from "@mui/material";
import { TextInputField } from "./TextInput.styles";

interface TextInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  inputAdornment?: React.ReactNode;
  fullWidth?: boolean;
  variant?: TextFieldProps["variant"];
  type?: TextFieldProps["type"];
  helperText?: string;
  label?: string;
}
export const TextInput: React.FunctionComponent<TextInputProps> = ({
  placeholder,
  onChange,
  value,
  disabled,
  variant,
  fullWidth,
  helperText,
  label,
}) => {
  return (
    <TextInputField
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      fullWidth={fullWidth}
      variant={variant}
      helperText={helperText}
      size="small"
      label={label}
    />
  );
};
