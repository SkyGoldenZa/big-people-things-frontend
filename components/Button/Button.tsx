import { MouseEventHandler, ReactNode } from 'react';
import { ButtonContainer, StyledButton } from './styled-components'

const Button = ({
  children,
  onClick,
  primary = true,
}: {
  children: ReactNode,
  onClick: MouseEventHandler<HTMLDivElement>,
  primary: boolean,
}) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>{children}</StyledButton>
  );
};

export default Button;
