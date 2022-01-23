import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  margin-top: -16rem;
`;

export const GridWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.grid.gutter};
  `}
`;
