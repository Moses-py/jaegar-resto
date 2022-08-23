import { ComponentMeta, ComponentStory } from "@storybook/react";
import BasicTabs from "../Tabs";

export default {
  title: "Tabs",
  component: BasicTabs,
} as ComponentMeta<typeof BasicTabs>;

export const TabMenu: ComponentStory<typeof BasicTabs> = () => {
  return <BasicTabs />;
};
