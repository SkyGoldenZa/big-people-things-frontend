import { ChangeEvent } from 'react';
import {
  StyledInput,
  StyledInputContainer,
  StyledErrorText,
} from './styled-components';

const Input = ({
  onChange,
  style,
  placeholder,
  password = false,
  formHook,
  errorMessage,
}: {
  onChange?: any;
  style?: any;
  placeholder?: string;
  password?: boolean;
  formHook?: any;
  errorMessage?: string | undefined;
}) => {
  const formHookData = formHook || '';
  return (
    <StyledInputContainer>
      <StyledInput
        {...formHookData}
        style={{ ...style }}
        placeholder={placeholder}
        type={password ? 'password' : 'text'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange?.(e.target.value);
        }}
      />
      <StyledErrorText errorMessage={errorMessage}>
        {errorMessage}
      </StyledErrorText>
    </StyledInputContainer>
  );
};

export default Input;
