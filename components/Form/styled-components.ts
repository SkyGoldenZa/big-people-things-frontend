import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.card};
  
  justify-content: stretch;
`;
