import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.shape};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textTitle};
  `}
`;

type AmountProps = {
  type: 'withdraw' | 'deposit';
};

const AmountModifier = {
  deposit: (theme: DefaultTheme) => css`
    color: ${theme.colors.green};
  `,
  withdraw: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `
};

export const Amount = styled.p<AmountProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${!!type && AmountModifier[type](theme)}
  `}
`;

export const Flex = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const Category = styled.p``;

export const Date = styled.p``;
