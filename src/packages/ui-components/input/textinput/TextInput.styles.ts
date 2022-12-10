import {styled, Input as MuiInput} from '@mui/material';

export const TextInputField = styled(MuiInput)(({theme}) => ({
    backgroundColor: "#2D303E",
    padding: `4px ${theme.spacing(2)}`,
    borderRadius: "8px",
    border: "1px solid #ABBBC2",
    "&.MuiInput-root": {
        color: "#fff",
        "&.MuiInputBase-input MuiInput-input": {
            "& ::placeholder": {
                color: "#ABBBC2",
                fontWeight: 300
            }
        }
    }
}))