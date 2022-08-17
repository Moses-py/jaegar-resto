import { SidebarButtonRoot } from "./Button.styles";
import { IconButton } from "./IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const SidebarButton: React.FunctionComponent = ({}) => {
  return (
    <SidebarButtonRoot>
      <IconButton icon={<AddRoundedIcon />} variant="contained" />
    </SidebarButtonRoot>
  );
};
