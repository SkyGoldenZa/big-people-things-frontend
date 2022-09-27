import { TopNav } from './TopNav';
import { LayoutContainer } from './styled-components';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <TopNav />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
