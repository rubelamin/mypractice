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
      thin: 'rgb(208, 242, 255)',
      thincolor: 'rgb(4, 41, 122)',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      thin: 'rgb(255, 231, 217)',
      thincolor: 'rgb(122, 12, 46)',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      thin: 'rgb(255, 247, 205)',
      thincolor: 'rgb(122, 79, 1)',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
    },
    success: {
      main: 'rgb(200 250 205)',
      light: '#4caf50',
      dark: 'rgb(0, 82, 73)',
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
      paper: grey[100],
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


