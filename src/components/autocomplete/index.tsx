import { memo } from 'react';
import { styled } from '@mui/material/styles';
import {
  Autocomplete as MuiAutocomplete,
  Popper,
  TextField,
  Typography,
} from '@mui/material';

export type AutocompleteValue = {
  value: string;
};

export type AutocompleteProps = {
  label: string;
  placeholder: string;
  options: AutocompleteValue[];
  onChange: (value: AutocompleteValue[]) => void;
};

const Autocomplete = ({
  options,
  label,
  onChange,
  placeholder,
}: AutocompleteProps) => {
  return (
    <MuiAutocomplete
      multiple
      size="small"
      options={options}
      onChange={(_, value) => onChange(value)}
      getOptionLabel={(option) => option.value}
      renderInput={(params) => (
        <>
          <StyledLabel>{label}</StyledLabel>
          <StyledTextField {...params} placeholder={placeholder} />
        </>
      )}
      PopperComponent={StyledPopper}
    />
  );
};

const StyledLabel = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.lightTextPrimary,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    minHeight: '40px',
    '& input': {
      fontSize: '14px',
      color: theme.palette.lightTextPrimary,

      '&::placeholder': {
        color: theme.palette.lightTextPrimaryShades,
      },
    },
    '& fieldset': {
      borderColor: theme.palette.lightOtherOutlinedBorder,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.lightOtherOutlinedBorder,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.lightOtherOutlinedBorder,
    },
    '& .MuiAutocomplete-tag': {
      fontSize: '13px',
      margin: '2px 6px 2px 0',
      background: theme.palette.lightActionSelected,
    },
  },
}));

const StyledPopper = styled(Popper)(({ theme }) => ({
  '& .MuiPaper-root': {
    fontSize: '16px',
    marginTop: '2px',
    color: theme.palette.lightTextPrimary,
    boxShadow:
      '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    '& .MuiAutocomplete-listbox': {
      maxHeight: '220px',
      '::-webkit-scrollbar': {
        width: '14px',
      },
      '&::-webkit-scrollbar-track': {
        width: '14px',
        borderLeft: `1px solid ${theme.palette.lightOtherOutlinedBorder}`,
        background: theme.palette.lightBackground,
      },
      '&::-webkit-scrollbar-thumb': {
        height: '54px',
        borderRadius: '10px',
        background: theme.palette.lightTextSecondary,
        border: '4px solid transparent',
        backgroundClip: 'content-box',
      },
    },
  },
}));

export default memo(Autocomplete);
