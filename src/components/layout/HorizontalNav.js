import React from 'react';
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/Favorite';

import Logo from './../content/Logo';


import theme from './../../settings/theme';



const HorizontalNav = ({
  children,
}) => {

  const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: transparent;
    padding: 0 15px;
    height: 80px;

    .App-brand {
      display: flex;
      align-items: center;
      font-weight: bold;
      margin-right: auto;
      color: ${theme.color.secondary};
      button {
        padding-left: 0;
        border: 0;
        background: transparent;
      }
    }

    .btnIcon {
      margin-left: 8px!important;
    }
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
    // margin: 8px!important;
  `; 
  const StyledIconNotificationIcon = styled(IconNotificationIcon)`
  color: ${theme.color.gray}!important;
    // margin: 8px!important;
  `; 

  return (
    <Nav>
      { children }
      <StyledIconSearch className="btnIcon" />
      <StyledIconNotificationIcon className="btnIcon" />
    </Nav>
  );
};

export default HorizontalNav;
