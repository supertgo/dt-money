import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall} 16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Image = styled.img``;

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    background: ${theme.colors.blueLight};
    border: 0;
    padding: 0 2rem;
    border-radius: ${theme.border.radius};
    height: 4.8rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
