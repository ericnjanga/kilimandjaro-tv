import React from 'react';
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/Favorite';


import theme from './../../settings/theme';



const TopNav = () => {

  const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: transparent;
    height: 80px;
  `;

  const IconSearch = ({ className, children }) => (
    <IconButton className={className} aria-label="Search">
      <SearchIcon />
    </IconButton>
  );
  const IconNotificationIcon = ({ className, children }) => (
    <IconButton className={className} aria-label="Subscribe">
      <NotificationIcon />
    </IconButton>
  );
  const StyledIconSearch = styled(IconSearch)`
  color: ${theme.color.gray}!important;
    margin: 8px!important;
  `; 
  const StyledIconNotificationIcon = styled(IconNotificationIcon)`
  color: ${theme.color.gray}!important;
    margin: 8px!important;
  `; 

  return (
    <Nav>
      <StyledIconSearch />
      <StyledIconNotificationIcon />
    </Nav>
  );
};

export default TopNav;
