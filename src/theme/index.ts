import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    lightTextPrimary: string;
    lightActionSelected: string;
    lightTextSecondary: string;
    lightOtherOutlinedBorder: string;
    lightBackground: string;
    lightTextPrimaryShades: string;
  }
  interface PaletteOptions {
    lightTextPrimary: string;
    lightActionSelected: string;
    lightTextSecondary: string;
    lightOtherOutlinedBorder: string;
    lightBackground: string;
    lightTextPrimaryShades: string;
  }
}

const theme = createTheme({
  palette: {
    lightTextPrimary: '#192048',
    lightActionSelected: '#3F51B514',
    lightTextSecondary: '#5E637F',
    lightOtherOutlinedBorder: '#1920483B',
    lightBackground: '#F9F9F9',
    lightTextPrimaryShades: '#19204880',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default theme;
