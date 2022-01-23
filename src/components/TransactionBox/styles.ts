/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { TransactionBoxProps } from '.';

type WrapperProps = Pick<TransactionBoxProps, 'color'>;

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color }) => css`
    background: ${theme.colors[color!]};
    padding: ${theme.spacings.medium};
    border-radius: 0.4rem;
    color: ${theme.colors.textTitle};
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  text-transform: capitalize;
`;

export const Image = styled.img``;

export const Amount = styled.strong`
  ${({ theme }) => css`
    display: block;
    margin-top: ${theme.spacings.xsmall};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: ${theme.spacings.xlarge};

    ${media.lessThan('medium')`
      font-size: 2.5rem;
    `}
  `}
`;
