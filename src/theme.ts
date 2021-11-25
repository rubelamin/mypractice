import { createTheme } from '@mui/material/styles';
import { orange, grey, red, green } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    [key: string]: any;
  }
  interface ThemeOptions {
    [key: string]: any;
  }
  interface PaletteOptions {
    [key: string]: any;
  }
}

export const refflyTheme = {
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    tertiary: {
      main: orange[500],
      dark: orange[900],
      light: orange[200],
    },
    refflyplus: {
      primary: green[500],
      secondary: grey[800],
      tertiary: green[900],
    },
    background: {
      default: '#ECEFF1',
      paper: grey[200],
      red: red[800],
      pink: '#e91e63',
      purple: '#9c27b0',
      deepPurple: '#673ab7',
      indigo: '#3f51b5',
      blue: '#2196f3',
      lightBlue: '#03a9f4',
      cyan: '#00bcd4',
      teal: '#009688',
      green: green[500],
      lightGreen: '#8bc34a',
      lime: '#cddc39',
      yellow: '#ffeb3b',
      amber: '#ffc107',
      orange: '#ff9800',
      deepOrange: '#ff5722',
      brown: '#795548',
      grey: grey[500],
      blueGrey: '#607d8b',

    },
    fontColor: {
      main: grey[900],
      paper: grey[200],
        red: red[800],
        pink: '#e91e63',
        purple: '#9c27b0',
        deepPurple: '#673ab7',
        indigo: '#3f51b5',
        blue: '#2196f3',
        lightBlue: '#03a9f4',
        cyan: '#00bcd4',
        teal: '#009688',
        green: green[500],
        lightGreen: '#8bc34a',
        lime: '#cddc39',
        yellow: '#ffeb3b',
        amber: '#ffc107',
        orange: '#ff9800',
        deepOrange: '#ff5722',
        brown: '#795548',
        grey: grey[500],
        blueGrey: '#607d8b',
    },
  },
  typography: {
    h6: { fontSize: '1.25rem' },
    h5: { fontSize: '1.50rem' },
    h4: { fontSize: '1.75rem' },
    h3: { fontSize: '2rem' },
    h2: { fontSize: '2.25rem' },
    h1: { fontSize: '2.50rem' },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        textColor: '#ffffff',
        color: '#ffffff',
      },
      raisedSecondary: {
        textColor: '#ffffff',
        color: '#ffffff',
      },
    },
  },
};

export const defaultTheme = createTheme(refflyTheme);


