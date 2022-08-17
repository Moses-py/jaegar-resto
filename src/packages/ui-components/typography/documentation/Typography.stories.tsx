// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "../Typography";
import { ThemeProvider } from "../../../../theme/ThemeProvider";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const TypographyList: ComponentStory<typeof Typography> = () => (
  <ThemeProvider>
    <Typography variant="h1">Jaegar Resto</Typography>
    <Typography variant="h2">Jaegar Resto</Typography>
    <Typography variant="caption">Jaegar Resto</Typography>
    <Typography variant="body1">Jaegar Resto</Typography>
    <Typography variant="subtitle1">Jaegar Resto</Typography>
    <Typography variant="body2">Jaegar Resto</Typography>
    <Typography variant="subtitle2">Jaegar Resto</Typography>
  </ThemeProvider>
);
