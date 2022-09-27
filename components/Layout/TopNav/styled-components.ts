import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.bg};
`;
