import { JaegarMenuPaper } from "./JaegarMenu.styles";
import { JaegarMenuHeader } from "./JaegarMenuHeader";
import { JaegarTab } from "./JaegarTab";

export const JaegarMenu: React.FunctionComponent = () => {
  return (
    <JaegarMenuPaper>
      <JaegarMenuHeader />
      <JaegarTab />
    </JaegarMenuPaper>
  );
};
