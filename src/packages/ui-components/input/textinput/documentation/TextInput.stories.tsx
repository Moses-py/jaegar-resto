import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInput } from "../TextInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default {
  title: "Input",
  component: TextInput,
  args: {
    disabled: false,
    control: "switcher",
  },
} as ComponentMeta<typeof TextInput>;

export const TextInputField: ComponentStory<typeof TextInput> = () => {
  return (
    <TextInput
      disabled={false}
      placeholder="Search"
      fullWidth={true}
      inputAdornment={<SearchRoundedIcon fontSize="small" />}
    />
  );
};
