import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  margin: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.card};
  justify-content: stretch;

  transition: all 0.2s ease-in-out;
`;
