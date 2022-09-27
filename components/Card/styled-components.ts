import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  flex: 1 1 0;
  
  padding: 24px;
  margin: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.card};
`;
