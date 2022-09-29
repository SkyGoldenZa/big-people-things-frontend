import styled from 'styled-components';

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 24px;
  width: 100%;
  border: 1px ${props => props.theme.colors.primary} solid;
`;
