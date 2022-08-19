import {styled, TextField as MuiInput} from '@mui/material';

export const TextInputField = styled(MuiInput)(({theme}) => ({
    color: theme.palette.primary.light,
    transition: 'border-color 0.2s ease-in-out',
    
}))