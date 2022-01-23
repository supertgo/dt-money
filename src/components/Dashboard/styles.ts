import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 112rem;
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};
  `}
`;

export const TransactionList = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textTitle};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const ListItems = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`;
