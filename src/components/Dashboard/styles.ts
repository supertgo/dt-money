import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};
  `}
`;
