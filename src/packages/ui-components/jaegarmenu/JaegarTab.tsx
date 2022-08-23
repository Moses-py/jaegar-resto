import BasicTabs from "../tabs/Tabs";
import { JaegarMenuFoodCard } from "./JaegarMenuFoodCard";

export const JaegarTab: React.FunctionComponent = () => {
  return <BasicTabs tabItem={<JaegarMenuFoodCard />} />;
};
