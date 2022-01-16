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
      background: ${theme.colors.background};
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 600;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 57.6rem;
      background: ${theme.colors.background};
      padding: ${theme.spacings.xlarge};
      position: relative;
      border-radius: ${theme.border.radius};
    }
  `}  
`;

export default GlobalStyles;
