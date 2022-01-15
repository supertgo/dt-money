import styled, { css, DefaultTheme } from 'styled-components';
import { TransactionsTableProps } from '.';

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

export const Td = styled.td`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border: 0;
    background: ${theme.colors.shape};
    color: ${theme.colors.text};
    border-radius: ${theme.border.radius};

    &:first-child {
      color: ${theme.colors.textTitle};
    }
  `}
`;

type AmountProps = Pick<TransactionsTableProps, 'type'>;

const AmountTdModifiers = {
  deposit: (theme: DefaultTheme) => css`
    color: ${theme.colors.green};
  `,
  withdraw: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `
};

export const AmountTd = styled(Td)<AmountProps>`
  ${({ theme, type }) => css`
    ${!!type && AmountTdModifiers[type](theme)}
  `}
`;

export const TBody = styled.tbody``;
