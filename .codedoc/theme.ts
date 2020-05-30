import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    primary: '#363062',
    background: '#f5f5f5',
    code: '#363062',
  },
  dark: {
    primary: '#9399ff',
    background: '#212121',
    code: '#9399ff',
  },
  quote: {
    dark: {
      background: '#313131',
      border: '#414141',
    },
    light: {
      background: '#f5f5f5',
      text: '#757575',
    }
  },
  code: {
    light: {
      shadow: '',
    },
    dark: {
      shadow: '',
    }
  }
});
