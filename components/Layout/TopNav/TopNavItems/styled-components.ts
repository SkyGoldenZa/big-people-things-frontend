import styled from 'styled-components';

export const TopNavItemsContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.nav};
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.nav};
`;
