import { Box as MuiBox, styled } from "@mui/material";

export const JaegarMenuOrderContainer = styled(MuiBox)(({ theme }) => {
  return {
    padding: "1.5rem",
    borderRadius: "o 12px 12px 0",
    color: "#fff",
    height: "100vh",
    backgroundColor: "#1F1D2B",
    position: "relative",
  };
});

export const JaegarMenuOrderTop = styled(MuiBox)(({ theme }) => {
  return {
    height: "80vh",
    backgroundColor: "#1F1D2B",
  };
});

export const JaegarMenuOrderButtons = styled(MuiBox)(({ theme }) => {
  return {
    display: "inline",
    "& .MuiButton-root": {
      marginRight: "8px",
      marginTop: "30px",
    },
  };
});

export const JaegarMenuOrderFoodTile = styled(MuiBox)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    "& img": {
      height: "40px",
      width: "40px",
      borderRadius: "100%",
    },
  };
});

export const JaegarMenuOrderNumberTile = styled(MuiBox)(({ theme }) => {
  return {
    backgroundColor: "#2D303E",
    padding: `10px 20px`,
    borderRadius: "8px",
    border: "1px solid #ABBBC2",
    overflow: "scroll",
  };
});

export const JaegarMenuOrderFooterContainer = styled(MuiBox)(({ theme }) => {
  return {
    height: "20vh",
    width: "30vw",
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#1F1D2B",
  };
});

export const JaegarMenuOrderFooterDiscount = styled(MuiBox)(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "16px 0",
  };
});
