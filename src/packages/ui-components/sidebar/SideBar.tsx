import { AppSideBar } from "./SideBar.styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LocalConvenienceStoreRoundedIcon from "@mui/icons-material/LocalConvenienceStoreRounded";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import { SideBarIconButton } from "./SideBarIcon";
import { theme } from "../../../theme/Theme";
import { Box } from "@mui/material";

export const SideBar: React.FunctionComponent = () => {
  const iconStyles = {
    fontSize: theme.spacing(2),
    color: "#EA7C69",
  };

  return (
    <AppSideBar>
      <Box
        sx={{ backgroundColor: "#EB966A", opacity: 0.6, borderRadius: "8px" }}
      >
        <LocalConvenienceStoreRoundedIcon
          sx={{ padding: "0.5rem", fontSize: "2rem" }}
        />
      </Box>
      <SideBarIconButton>
        <HomeOutlinedIcon
          fontSize="small"
          sx={{
            backgroundColor: theme.palette.primary.main,
            padding: "1rem",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
      </SideBarIconButton>
      <SideBarIconButton>
        <InventoryOutlinedIcon sx={iconStyles} />
      </SideBarIconButton>
      <SideBarIconButton>
        <DonutSmallOutlinedIcon sx={iconStyles} />
      </SideBarIconButton>
      <SideBarIconButton>
        <EmailOutlinedIcon sx={iconStyles} />
      </SideBarIconButton>
      <SideBarIconButton>
        <NotificationsOutlinedIcon sx={iconStyles} />
      </SideBarIconButton>
      <SideBarIconButton>
        <SettingsOutlinedIcon sx={iconStyles} />
      </SideBarIconButton>
      <SideBarIconButton>
        <ExitToAppRoundedIcon sx={iconStyles} />
      </SideBarIconButton>
    </AppSideBar>
  );
};
