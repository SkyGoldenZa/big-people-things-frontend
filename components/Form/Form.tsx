import { ReactNode, FormEventHandler } from 'react';
import { StyledForm } from './styled-components'

const Form = ({ children, onSubmit }: { children: ReactNode; onSubmit: FormEventHandler<HTMLFormElement> }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};

export default Form;
