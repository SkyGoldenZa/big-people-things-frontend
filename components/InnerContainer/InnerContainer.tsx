import { ReactNode } from 'react';
import { StyledInnerContainer } from './styled-components';

const InnerContainer = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: any;
}) => {
  return (
    <StyledInnerContainer style={{ ...style }}>
      {children}
    </StyledInnerContainer>
  );
};

export default InnerContainer;
