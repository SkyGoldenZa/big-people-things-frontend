import { CardContainer } from './styled-components'

const Card = ({ children }) => {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
};

export default Card;
