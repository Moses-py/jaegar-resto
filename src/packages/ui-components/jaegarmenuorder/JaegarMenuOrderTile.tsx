import { Box, Grid, IconButton } from "@mui/material";
import { TextInput } from "../input/textinput/TextInput";
import { Typography } from "../typography/Typography";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import {
  JaegarMenuOrderFoodTile,
  JaegarMenuOrderNumberTile,
} from "./JaegarMenuOrder.styles";

export const JaegarMenuOrderTile: React.FunctionComponent = () => {
  return (
    <Box>
      <Grid container sx={{ margin: "20px 0" }}>
        <Grid item xs={8}>
          <JaegarMenuOrderFoodTile>
            <img src="/Content/image 4.png" alt="foodImg" />
            <Box>
              <Typography variant="subtitle2">
                Spicy Seasoned Sea food
              </Typography>
              <Typography variant="subtitle2">$4.99</Typography>
            </Box>
          </JaegarMenuOrderFoodTile>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <JaegarMenuOrderNumberTile>2</JaegarMenuOrderNumberTile>
            <Typography variant="subtitle2">$9.99</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={10}>
          <TextInput fullWidth={true} placeholder="Order note..." />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton color="error" sx={{ border: "0.5px solid red" }}>
              <DeleteOutlineRoundedIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
