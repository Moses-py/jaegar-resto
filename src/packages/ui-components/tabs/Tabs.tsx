import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Tabs } from "./Tabs.styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface TabProps {
  tabItem?: React.ReactNode;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            padding: 0,
            margin: 0,
          }}
        >
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export default function BasicTabs({ tabItem }: TabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Hot Dishes" {...a11yProps(0)} />
          <Tab label="Cold Dishes" {...a11yProps(1)} />
          <Tab label="Appetizers" {...a11yProps(2)} />
          <Tab label="Food Grills" {...a11yProps(3)} />
          <Tab label="Dessert" {...a11yProps(4)} />
          <Tab label="Soup" {...a11yProps(5)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {tabItem}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {tabItem}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {tabItem}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {tabItem}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {tabItem}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {tabItem}
      </TabPanel>
    </Box>
  );
}
