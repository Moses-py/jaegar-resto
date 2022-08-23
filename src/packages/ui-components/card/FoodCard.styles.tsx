import { Box as MuiBox, styled } from "@mui/material";

export const FoodCardContainer = styled(MuiBox)(({ theme }) => {
  return {
    padding: theme.spacing(2),
    color: "#fff",
    display: "inline-block",
    position: "relative",
  };
});

export const FoodCardItem = styled(MuiBox)(({ theme }) => {
  return {
    backgroundColor: "#1F1D2B",
    width: "150px",
    padding: `${theme.spacing(3)} ${theme.spacing(3)}`,
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  };
});

export const FoodImageContainer = styled(MuiBox)(({ theme }) => {
  return {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      position: "absolute",
      width: "120px",
      height: "120px",
      borderRadius: "100%",
    },
  };
});

export const FoodCardDetails = styled(MuiBox)(({ theme }) => {
  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    padding: "0.5rem 0",
    marginTop: theme.spacing(8),
  };
});
