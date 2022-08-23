import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FoodCard } from "../FoodCard";

export default {
  title: "FoodCard",
  component: FoodCard,
} as ComponentMeta<typeof FoodCard>;

export const FoodCardBox: ComponentStory<typeof FoodCard> = () => {
  return <FoodCard />;
};
