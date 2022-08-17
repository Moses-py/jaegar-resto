import { StyledTypography } from "./Typography.styles";
import { TypographyProps as MuiTypographyProps } from "@mui/material";
interface TypographyProps {
  children: React.ReactNode;
  variant?: MuiTypographyProps["variant"];
}

export const Typography: React.FunctionComponent<TypographyProps> = ({
  children,
  variant,
}) => {
  return <StyledTypography variant={variant}>{children}</StyledTypography>;
};
