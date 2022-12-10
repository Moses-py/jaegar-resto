import { SideBarIcon } from "./SideBar.styles";

interface SideBarIconButtonProps {
  children: React.ReactNode;
}
export const SideBarIconButton: React.FunctionComponent<SideBarIconButtonProps> =
  ({ children }) => {
    return <SideBarIcon>{children}</SideBarIcon>;
  };
