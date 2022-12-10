import { Box } from "@mui/material";
import { TextInput } from "../input/textinput/TextInput";
import { Typography } from "../typography/Typography";
import {
  JaegarMenuHeaderContainer,
  JaegarMenuHeaderTextInputContainer,
} from "./JaegarMenu.styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
export const JaegarMenuHeader = () => {
  return (
    <JaegarMenuHeaderContainer>
      <Box>
        <Typography variant="h1">Jaegar Resto</Typography>
        <Typography variant="body2">Tuesday, 7 February 2021</Typography>
      </Box>
      <JaegarMenuHeaderTextInputContainer>
        <TextInput
          fullWidth={true}
          placeholder="search for foods, coffee etc..."
          inputAdornment={<SearchOutlinedIcon fontSize="small" />}
        />
      </JaegarMenuHeaderTextInputContainer>
    </JaegarMenuHeaderContainer>
  );
};
