import { MouseEventHandler, ReactNode } from 'react';
import { ButtonContainer, StyledButton } from './styled-components';

const Button = ({
  children,
  onClick,
  primary = false,
  style,
  disabled = false,
  outline = false,
}: {
  children: ReactNode;
  onClick: () => void;
  primary?: boolean;
  style?: any;
  disabled?: boolean;
  outline?: boolean;
}) => {
  return (
    <StyledButton
      primary={primary}
      onClick={() => onClick()}
      style={{ ...style }}
      disabled={disabled}
      outline={outline}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
