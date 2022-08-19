import { IconButtonRoot } from "./Button.styles";
import { ButtonProps as MuiButtonProps } from "@mui/material";

export interface IconButtonProps {
  icon: React.ReactNode;
  variant: MuiButtonProps["variant"];
  onClick?: () => void;
}

export const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  onClick,
  variant,
  ...restProps
}) => {
  return (
    <IconButtonRoot
      disableElevation
      disableRipple
      {...restProps}
      variant={variant}
      onClick={onClick}
    >
      {icon}
    </IconButtonRoot>
  );
};
