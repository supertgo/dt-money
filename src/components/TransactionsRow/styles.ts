import styled, { css, DefaultTheme } from 'styled-components';

export const Tr = styled.tr``;

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

type AmountProps = {
  type: 'withdraw' | 'deposit';
};

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
