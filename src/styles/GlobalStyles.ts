import { createGlobalStyle } from "styled-components";
import {myTheme} from './Theme';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${myTheme.color.grey.light};
   }

`;