import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { Colors } from './variables';

const customTags = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${Colors.black};
    font-weight: bold;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
`;

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${customTags}
    *, *::before, *::after {
    box-sizing: border-box;
  }

`;
