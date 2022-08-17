import React from "react";
import { Root } from "./Button.styles";
import { ButtonProps as MuiButtonProps } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  variant?: MuiButtonProps["variant"];
  size?: MuiButtonProps["size"];
  fullWidth?: boolean;
  startIcon?: MuiButtonProps["startIcon"];
  icon?: MuiButtonProps["endIcon"];
  onClick?: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  variant,
  size,
  fullWidth,
  onClick,
  ...restProps
}) => {
  return (
    <Root
      fullWidth={fullWidth}
      disableRipple
      disableElevation
      onClick={onClick}
      variant={variant}
      {...restProps}
    >
      {children}
    </Root>
  );
};
