import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.card};
`;

export const StyledButton = styled.div<{isPrimary: boolean}>`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 24px;
  ${props => props.isPrimary ? css`
    background: ${({ theme }) => theme.buttons.primary.bg};
  ` : ''}
  color: ${({ theme }) => theme.buttons.primary.text};
`;
