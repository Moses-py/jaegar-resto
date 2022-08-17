// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Button";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { Typography } from "../../typography/Typography";
import { IconButton } from "../IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const PrimaryButton: ComponentStory<typeof Button> = () => (
  <ThemeProvider>
    <Button variant="outlined" size="medium">
      <Typography variant="subtitle2">Jaegar Resto</Typography>
    </Button>
  </ThemeProvider>
);

export const IconButtonFilled: ComponentStory<typeof IconButton> = () => (
  <ThemeProvider>
    <IconButton variant="contained" icon={<AddRoundedIcon />} />
  </ThemeProvider>
);
export const IconButtonOutlined: ComponentStory<typeof IconButton> = () => (
  <ThemeProvider>
    <IconButton variant="outlined" icon={<AddRoundedIcon />} />
  </ThemeProvider>
);
