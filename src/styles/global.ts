import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}  
`;

export default GlobalStyles;
