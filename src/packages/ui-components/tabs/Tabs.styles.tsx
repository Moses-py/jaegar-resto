import { Tabs as MuiTab, styled } from "@mui/material";

export const Tabs = styled(MuiTab)(({ theme }) => {
  return {
    width: "100%",
    height: "100%",
    padding: theme.spacing(0),
    margin: 0,
    background: "transparent",
    "&.MuiTabPanel-root": {
      padding: 0,
      margin: 0,
    },
    "& .MuiTabs-indicator": {
      background: "#FB6F6F",
    },
    "& .MuiTab-root": {
      textTransform: "none",
      color: "#fff",
      justifyContent: "flex-start",
      "&.Mui-selected": {
        color: "#FB6F6F",
      },
    },
  };
});
