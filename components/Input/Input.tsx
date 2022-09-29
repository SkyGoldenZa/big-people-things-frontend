import { ChangeEvent } from 'react';
import { StyledInputContainer, StyledInput } from './styled-components';

const Input = ({
  name,
  onChange,
  style,
  placeholder,
  password = false,
}: {
  name: string;
  onChange: any;
  style?: any;
  placeholder?: string;
  password?: boolean;
}) => {
  return (
    <StyledInput
      style={{ ...style }}
      placeholder={placeholder}
      type={password ? 'password' : 'text'}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange({ name, value: e.target.value });
      }}
    />
  );
};

export default Input;
