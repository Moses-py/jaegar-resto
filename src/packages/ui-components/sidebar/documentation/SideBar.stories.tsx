import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SideBar } from "../SideBar";

export default {
  title: "Sidebar",
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

export const AppSideBar: ComponentStory<typeof SideBar> = () => {
  return <SideBar />;
};
