import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  margin-top: 6.4rem;
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-spacing: 0 ${theme.spacings.xxsmall};
  `}
`;

export const THead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    text-align: left;
    line-height: ${theme.spacings.small};
  `}
`;

export const TBody = styled.tbody``;
