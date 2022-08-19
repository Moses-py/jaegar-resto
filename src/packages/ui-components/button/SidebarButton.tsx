import { SidebarButtonRoot } from "./Button.styles";
import { IconButton, IconButtonProps } from "./IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const SidebarButton: React.FunctionComponent<IconButtonProps> = ({
  variant,
  onClick,
}) => {
  return (
    <SidebarButtonRoot>
      <IconButton
        icon={<AddRoundedIcon />}
        variant={variant}
        onClick={onClick}
      />
    </SidebarButtonRoot>
  );
};
