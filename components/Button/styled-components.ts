import styled, { css } from 'styled-components';

type StyledButtonType = {
  primary: boolean;
  disabled: boolean;
  outline: boolean;
};

export const ButtonContainer = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.card};
`;

export const StyledButton = styled.div<StyledButtonType>`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 24px;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease-in-out;

  ${props =>
    props.outline
      ? css`
          background: ${({ theme }) => theme.buttons.outline.bg};
          color: ${({ theme }) => theme.buttons.outline.color};
          box-shadow: ${({ theme }) => `${theme.buttons.outline.boxShadow}50`};

          &:hover {
            background: ${({ theme }) => `${theme.buttons.outline.bg}`};
            color: ${({ theme }) => `${theme.buttons.outline.color}`};
            box-shadow: ${({ theme }) => `${theme.buttons.outline.boxShadow}`};
          }
        `
      : ''}

  ${props =>
    props.primary
      ? css`
          background: ${({ theme }) => theme.buttons.primary.bg};
          color: ${({ theme }) => theme.buttons.primary.color};
        `
      : ''}

  ${props =>
    props.disabled
      ? css`
          background: ${({ theme }) => theme.buttons.primary.disabled};
          color: ${({ theme }) => theme.buttons.primary.color};
          cursor: default;
        `
      : ''}
`;
