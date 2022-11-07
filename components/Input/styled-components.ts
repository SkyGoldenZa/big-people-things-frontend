import styled from 'styled-components';

type ErrorType = {
  errorMessage: string | undefined;
};

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 16px;
`;

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 24px;
  width: 100%;
  border: 1px ${props => props.theme.colors.primary} solid;

  transition: all 0.2s ease-in-out;
`;

export const StyledErrorText = styled.span<ErrorType>`
  color: ${props => props.theme.colors.error};
  opacity: ${props => props.errorMessage ? '1' : '0'};
  font-size: 12px;
  margin-top: 2px;
  margin-left: 4px;
  position: absolute;
  top: 40px;
  transition: all 0.2s ease-in-out;
`;
