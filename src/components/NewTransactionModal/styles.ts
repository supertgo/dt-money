import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';

export const Form = styled.form``;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacings.xsmall};
    top: ${theme.spacings.xsmall};
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;

export const Image = styled.img``;
export const Text = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    margin-left: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.textTitle};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.textTitle};
    font-size: 2.4rem;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 ${theme.spacings.small};
    height: 6.4rem;
    border-radius: ${theme.border.radius};
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: ${theme.font.normal};

    &:focus {
      outline: 1px solid ${theme.colors.textTitle};
    }

    &::placeholder {
      color: ${theme.colors.text};
    }

    & + input {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`;

export const TransactionTypeContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.xxsmall};
  `}
`;

type TransactionButtonProps = {
  isActive: boolean;
  activeColor: 'green' | 'red';
};

export const TransactionButton = styled.button<TransactionButtonProps>`
  ${({ theme, isActive, activeColor }) => css`
    height: 6.4rem;
    border: 1px solid #d7d7d7;
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;

    ${isActive
      ? css`
          background: ${transparentize(0.9, theme.colors[activeColor])};
        `
      : css`
          background: transparent;
        `}

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    &:focus {
      outline: 1px solid ${theme.colors[activeColor]};
    }

    img {
      width: 2rem;
      height: 2rem;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 ${theme.spacings.small};
    height: 6.4rem;
    background: ${theme.colors.green};
    color: ${theme.colors.shape};
    border-radius: ${theme.border.radius};
    border: 0;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.xsmall};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:focus {
      outline: 1px solid ${theme.colors.green};
    }
  `}
`;
