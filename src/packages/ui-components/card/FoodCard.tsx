import { Button } from "../button/Button";
import { Typography } from "../typography/Typography";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {
  FoodCardContainer,
  FoodCardDetails,
  FoodCardItem,
  FoodImageContainer,
} from "./FoodCard.styles";

export const FoodCard: React.FunctionComponent = () => {
  const typographyStyleOverride = {
    padding: "0.5rem 0 0 0",
    fontSize: "14px",
  };
  return (
    <FoodCardContainer>
      <FoodCardItem>
        <FoodImageContainer>
          <img src="/Content/image 4.png" alt="foodImg" />
        </FoodImageContainer>
        <FoodCardDetails>
          <Typography
            variant="subtitle2"
            sx={{
              ...typographyStyleOverride,
              fontWeight: 400,
              lineHeight: "18.2px",
            }}
          >
            Spicy Seasoned Seafood Noodles
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ ...typographyStyleOverride, fontWeight: 300 }}
          >
            $2.99
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              ...typographyStyleOverride,
              color: "#ABBBC2",
              fontWeight: 300,
            }}
          >
            20 Bowls available
          </Typography>
        </FoodCardDetails>
        <Button
          variant="contained"
          startIcon={<ShoppingCartRoundedIcon />}
          size="medium"
        >
          <Typography variant="subtitle2">Add to cart</Typography>
        </Button>
      </FoodCardItem>
    </FoodCardContainer>
  );
};
