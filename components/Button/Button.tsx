import { MouseEventHandler, ReactNode } from 'react';
import { ButtonContainer, StyledButton } from './styled-components';

const Button = ({
  children,
  onClick,
  primary = false,
  style,
  disabled = false,
  outline = false,
  type = 'button',
}: {
  children: ReactNode;
  onClick?: () => void;
  primary?: boolean;
  style?: any;
  disabled?: boolean;
  outline?: boolean;
  type?: 'button' | 'submit' | 'reset';
}) => {
  return (
    <StyledButton
      primary={primary}
      outline={outline}
      style={{ ...style }}
      disabled={disabled}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
