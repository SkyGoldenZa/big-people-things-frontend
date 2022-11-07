import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  
  transition: all 0.2s ease-in-out;
`;
