import { Box as MuiBox, styled } from "@mui/material";

export const JaegarMenuPaper = styled(MuiBox)(({ theme }) => {
  return {
    padding: theme.spacing(2),
  };
});

export const JaegarMenuHeaderContainer = styled(MuiBox)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
  };
});

export const JaegarMenuHeaderTextInputContainer = styled(MuiBox)(
  ({ theme }) => {
    return {
      paddingRight: theme.spacing(3),
    };
  }
);
export const JaegarMenuFoodCardContainer = styled(MuiBox)(({ theme }) => {
  return {
    padding: 0,
    margin: 0,
  };
});
