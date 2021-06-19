import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext} from '../util/context/auth'
//import { AuthContext } from '../context/auth';

function MenuBar() {
 
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu pointing secondary size="massive" color="teal">

      <Menu.Item name={user.username}
      active
      as={Link}
      to="/" />

      <Menu.Menu position="right">
        <Menu.Item 
        name="logout"
        onClick={logout} />
      </Menu.Menu> 
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="user.username"
        active
        onClick={handleItemClick}
        as={Link}
        to="/"
      />

        <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
    </Menu>
    );

  return menuBar;
}

export default MenuBar;