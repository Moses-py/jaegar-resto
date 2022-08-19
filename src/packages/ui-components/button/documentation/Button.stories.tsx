// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Button";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { Typography } from "../../typography/Typography";
import { IconButton } from "../IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonOutlined: ComponentStory<typeof Button> = () => (
  <ThemeProvider>
    <Button variant="outlined" size="medium">
      <Typography variant="subtitle2">Jaegar Resto</Typography>
    </Button>
  </ThemeProvider>
);

export const ButtonFilled: ComponentStory<typeof Button> = () => (
  <ThemeProvider>
    <Button variant="contained" size="medium">
      <Typography variant="subtitle2">Jaegar Resto</Typography>
    </Button>
  </ThemeProvider>
);

export const StartIconButtonFilled: ComponentStory<typeof Button> = () => (
  <ThemeProvider>
    <Button variant="contained" size="medium" startIcon={<AddRoundedIcon />}>
      <Typography variant="subtitle2">Jaegar Resto</Typography>
    </Button>
  </ThemeProvider>
);

export const StartIconButtonOutlined: ComponentStory<typeof Button> = () => (
  <ThemeProvider>
    <Button variant="outlined" size="medium" startIcon={<AddRoundedIcon />}>
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
