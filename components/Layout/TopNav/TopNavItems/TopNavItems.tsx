import { Button } from 'components/Button';
import { NavItems } from 'types/Nav';

import { TopNavItemsContainer } from './styled-components';

const TopNavItems = ({ navItems }: { navItems: NavItems[] }) => {
  return (
    <TopNavItemsContainer>
      {navItems.map((navItem: NavItems, index: number) => {
        console.log('navItem', navItem);
        console.log('index', index);
        const isPrimary = navItems.length - 1 === index;
        return (
          <Button key={navItem.name} primary={isPrimary} onClick={() => navItem.navigate()}>{navItem.name}</Button>
        )
      })}
    </TopNavItemsContainer>
  );
};

export default TopNavItems;
