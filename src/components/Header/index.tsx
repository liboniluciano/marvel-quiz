import React from 'react';

import { MenuContent, ItemMenu, HeaderImg } from './styles';


const Header: React.FC = () => {
  return(
    <MenuContent>
      <ItemMenu>Ranking</ItemMenu>
      <ItemMenu>
        <HeaderImg />
      </ItemMenu>
      <ItemMenu>Login</ItemMenu>
    </MenuContent>
  );
}

export default Header;