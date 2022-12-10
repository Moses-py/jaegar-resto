import { Divider, Box } from "@mui/material";
import { Button } from "../button/Button";
import { Typography } from "../typography/Typography";
import {
  JaegarMenuOrderFooterContainer,
  JaegarMenuOrderFooterDiscount,
} from "./JaegarMenuOrder.styles";

export const JaegarMenuOrderFooter: React.FunctionComponent = () => {
  return (
    <JaegarMenuOrderFooterContainer>
      <Box sx={{ padding: "0 24px 24px 24px" }}>
        <Divider light={true} sx={{ borderColor: "rgb(255 255 255 / 8%)" }} />
        <JaegarMenuOrderFooterDiscount>
          <Typography variant="subtitle2">Discount</Typography>
          <Typography variant="subtitle2">$0</Typography>
        </JaegarMenuOrderFooterDiscount>
        <JaegarMenuOrderFooterDiscount>
          <Typography variant="subtitle2">Subtotal</Typography>
          <Typography variant="subtitle2">$21.26</Typography>
        </JaegarMenuOrderFooterDiscount>
        <Button variant="contained" fullWidth={true}>
          <Typography variant="subtitle2">Continue to payment</Typography>
        </Button>
      </Box>
    </JaegarMenuOrderFooterContainer>
  );
};
