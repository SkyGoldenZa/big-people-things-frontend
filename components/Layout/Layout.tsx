import { ReactNode } from 'react';
import { TopNav } from './TopNav';
import { LayoutContainer } from './styled-components';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContainer>
      {/*<TopNav />*/}
      {children}
    </LayoutContainer>
  );
};

export default Layout;
