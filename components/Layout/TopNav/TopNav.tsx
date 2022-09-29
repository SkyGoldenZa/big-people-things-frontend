import { useRouter } from 'next/router';
import { TopNavItems } from './TopNavItems';
import { TopNavContainer } from './styled-components';
import { NavItems } from 'types/Nav';

const TopNav = () => {
  const router = useRouter();

  const navItems = [
    { name: 'Login', navigate: () => router.push('login') },
    { name: 'Signup', navigate: () => router.push('signup') },
  ] as NavItems[];

  return (
    <TopNavContainer>
      <div>Big People Things!</div>

      <TopNavItems navItems={navItems} />
    </TopNavContainer>
  );
};

export default TopNav;
