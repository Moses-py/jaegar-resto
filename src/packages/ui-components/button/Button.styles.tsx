import { Button as MuiButton, styled } from "@mui/material";

export const Root = styled(MuiButton)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  fontWeight: theme.typography.fontWeightLight,
  textTransform: "none",

  "&.MuiButton-outlined": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  "&.MuiButton-contained": {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
  },
}));

export const IconButtonRoot = styled(MuiButton)(({ theme }) => ({
  textTransform: "none",
  padding: theme.spacing(0),

  "&.MuiButton-outlined": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },

  "&.MuiButton-contained": {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
  },
}));
