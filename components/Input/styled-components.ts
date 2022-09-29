import styled, { css } from 'styled-components';

// export const StyledInputContainer = styled.div`
//   border-radius: 8px;
//   background: ${({ theme }) => theme.colors.card};
//   width: 100%;
// `;

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 24px;
  width: 100%;
  border: 1px ${props => props.theme.colors.primary} solid;
`;
