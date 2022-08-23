import { Divider, Box } from "@mui/material";
import { Button } from "../button/Button";
import { Typography } from "../typography/Typography";
import {
  JaegarMenuOrderButtons,
  JaegarMenuOrderContainer,
  JaegarMenuOrderTop,
} from "./JaegarMenuOrder.styles";
import { JaegarMenuOrderDescription } from "./JaegarMenuOrderDescription";
import { JaegarMenuOrderFooter } from "./JaegarMenuOrderFooter";
import { JaegarMenuOrderTile } from "./JaegarMenuOrderTile";

export const JaegarMenuOrder: React.FunctionComponent = () => {
  return (
    <JaegarMenuOrderContainer>
      <JaegarMenuOrderTop>
        <Typography variant="h2">Order #646342</Typography>
        <JaegarMenuOrderButtons>
          <Button variant="contained" size="small">
            <Typography variant="subtitle2">Dine in</Typography>
          </Button>
          <Button variant="outlined" size="small">
            <Typography variant="subtitle2">Take out</Typography>
          </Button>
          <Button variant="outlined" size="small">
            <Typography variant="subtitle2">Delivery</Typography>
          </Button>
        </JaegarMenuOrderButtons>
        <JaegarMenuOrderDescription />
        <Divider light={true} sx={{ borderColor: "rgb(255 255 255 / 8%)" }} />
        <Box sx={{ overflow: "scroll", position: "relative" }}>
          <JaegarMenuOrderTile />
          <JaegarMenuOrderTile />
          <JaegarMenuOrderTile />
          <JaegarMenuOrderTile />
          <JaegarMenuOrderTile />
          <JaegarMenuOrderTile />
        </Box>
      </JaegarMenuOrderTop>

      <JaegarMenuOrderFooter />
    </JaegarMenuOrderContainer>
  );
};
