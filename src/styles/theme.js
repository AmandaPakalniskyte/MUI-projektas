import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#1c1b1a',
      light: '#d1cfcd',
      contrast: '#E8E8E8',
      contrastText: '#eeeeee',
    },
    secondary: {
      main: '#d4812a',
      light: '#de9d59',
      dark: '#d6c8bc',
      contrastText: '#eeeeee',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 780,
      lg: 992,
      xl: 1200,
      xxl: 1536,
    },
  },

  shape: {
    borderRadius: 4,
  },

  zIndex: {
    appBar: 1300,
  },
});

const theme = createTheme(baseTheme, {
  mixins: {
    toolbarOffset: {
      mt: 7,
      [baseTheme.breakpoints.up('xs')]: {
        '@media (orientation: landscape)': {
          mt: 6,
        },
      },
      [baseTheme.breakpoints.up('sm')]: {
        mt: 8,
      },
    },
  },
});

export default theme;
