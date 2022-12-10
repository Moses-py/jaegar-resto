import { JaegarMenu } from "../../packages/ui-components/jaegarmenu/JaegarMenu";
import { JaegarMenuOrder } from "../../packages/ui-components/jaegarmenuorder/JaegarMenuOrder";
import { SideBar } from "../../packages/ui-components/sidebar/SideBar";
import {
  DefaultHomePage,
  JaegarMenuContainer,
  JaegarOrderContainer,
  JaegarSidebarContainer,
  JaegerMenuListOrderContainer,
} from "./Homepage.styles";

export const Homepage: React.FunctionComponent = () => {
  return (
    <DefaultHomePage>
      <JaegarSidebarContainer>
        <SideBar />
      </JaegarSidebarContainer>
      <JaegerMenuListOrderContainer>
        <JaegarMenuContainer>
          <JaegarMenu />
        </JaegarMenuContainer>
        <JaegarOrderContainer>
          <JaegarMenuOrder />
        </JaegarOrderContainer>
      </JaegerMenuListOrderContainer>
    </DefaultHomePage>
  );
};
