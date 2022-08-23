import { Box, Grid } from "@mui/material";
import { Typography } from "../typography/Typography";

export const JaegarMenuOrderDescription: React.FunctionComponent = () => {
  return (
    <Grid container sx={{ margin: "30px 0" }}>
      <Grid item xs={8}>
        <Typography variant="subtitle2">Item</Typography>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle2">Qty</Typography>
          <Typography variant="subtitle2">Price</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
