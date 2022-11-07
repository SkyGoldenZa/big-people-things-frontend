import { Button } from 'components/Button';
import { NavItems } from 'types/Nav';

import { TopNavItemsContainer } from './styled-components';

const TopNavItems = ({ navItems }: { navItems: NavItems[] }) => {
  return (
    <TopNavItemsContainer>
      {navItems.map((navItem: NavItems, index: number) => {
        const isPrimary = navItems.length - 1 === index;
        const leftMargin = navItems.length !== 0;

        return (
          <Button
            key={navItem.name}
            primary={isPrimary}
            style={{ marginLeft: leftMargin && '24px' }}
            onClick={() => navItem.navigate()}
          >
            {navItem.name}
          </Button>
        );
      })}
    </TopNavItemsContainer>
  );
};

export default TopNavItems;
