import styled from 'styled-components';

export const TopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.nav};
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.nav};
`;
