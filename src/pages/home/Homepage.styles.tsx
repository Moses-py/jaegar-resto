import { Paper as MuiPaper, styled, Box as MuiBox } from "@mui/material";

export const DefaultHomePage = styled(MuiPaper)(({ theme }) => {
  return {
    width: "100%",
    padding: theme.spacing(0),
    backgroundColor: "#393C49",
  };
});

export const JaegarSidebarContainer = styled(MuiBox)(({ theme }) => {
  return {
    position: "fixed",
    width: "7vw",
    left: 0,
    top: 0,
  };
});
export const JaegerMenuListOrderContainer = styled(MuiBox)(({ theme }) => {
  return {
    display: "grid",
    gridTemplateColumns: "7vw auto",
  };
});

export const JaegarMenuContainer = styled(MuiBox)(({ theme }) => {
  return {
    gridColumnStart: 2,
    width: "63vw",
  };
});

export const JaegarOrderContainer = styled(MuiBox)(({ theme }) => {
  return {
    position: "fixed",
    width: "30vw",
    right: 0,
    top: 0,
    zIndex: 100,
    overflow: "scroll",
  };
});
