import { Box as MuiBox, styled, Button as MuiButton } from "@mui/material";

export const AppSideBar = styled(MuiBox)({
  width: "100%",
  height: "100vh",
  backgroundColor: "#1F1D2B",
  color: "#fff",
  borderRadius: "0 12px 12px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: 0,
  margin: 0,
});

export const SideBarIcon = styled(MuiButton)(({ theme }) => {
  return {
    padding: "1rem",
    color: theme.palette.primary.main,
  };
});
