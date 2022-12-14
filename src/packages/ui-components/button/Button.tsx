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
  startIcon,
  onClick,
  ...restProps
}) => {
  return (
    <Root
      fullWidth={fullWidth}
      disableElevation
      onClick={onClick}
      variant={variant}
      startIcon={startIcon}
      {...restProps}
    >
      {children}
    </Root>
  );
};
