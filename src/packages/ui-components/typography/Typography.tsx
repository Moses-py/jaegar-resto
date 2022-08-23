import { StyledTypography } from "./Typography.styles";
import { TypographyProps as MuiTypographyProps } from "@mui/material";
interface TypographyProps {
  children: React.ReactNode;
  variant?: MuiTypographyProps["variant"];
  sx?: React.CSSProperties;
}

export const Typography: React.FunctionComponent<TypographyProps> = ({
  children,
  variant,
  sx,
  ...restProps
}) => {
  return (
    <StyledTypography variant={variant} {...restProps} sx={sx}>
      {children}
    </StyledTypography>
  );
};
