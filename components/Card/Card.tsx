import { ReactNode } from 'react';
import { CardContainer } from './styled-components'

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
};

export default Card;
