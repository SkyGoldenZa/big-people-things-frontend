import { ReactNode } from 'react';
import { StyledOuterContainer } from './styled-components';

const OuterContainer = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: any;
}) => {
  return (
    <StyledOuterContainer style={{ ...style }}>
      {children}
    </StyledOuterContainer>
  );
};

export default OuterContainer;
