import { MouseEventHandler, ReactNode } from 'react';
import { ButtonContainer, StyledButton } from './styled-components'

const Button = ({
  children,
  onClick,
  isPrimary = true,
}: {
  children: ReactNode,
  onClick: MouseEventHandler<HTMLDivElement>,
  isPrimary: boolean,
}) => {
  return (
    <StyledButton isPrimary={isPrimary} onClick={onClick}>{children}</StyledButton>
  );
};

export default Button;
