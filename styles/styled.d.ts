import 'styled-components';
import { ThemeType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    black: string;
    white: string;
  }
}
