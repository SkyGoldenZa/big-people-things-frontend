import { ReactNode } from 'react';
import { StyledTitle } from './styled-components';

const Title = ({ children, style }: { children: ReactNode; style?: any }) => {
  return <StyledTitle style={{ ...style }}>{children}</StyledTitle>;
};

export default Title;
