import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components' //https://www.styled-components.com/docs/basics#styling-any-components
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Logo from './content/Logo'


const MainHeader = ({
  toggleDrawer
}) => {
  return (
    <MainNav>
      <NavLink exact to="/" className="brand" activeClassName="active">
        <Logo
          className="brand-logo"
        /> 
      </NavLink>

      {/* <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className="btn-menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton> */}
    </MainNav>
  );
}



const MainNav = styled.nav`
  display: flex;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  .brand {
    display: flex;
    flex-direction: row;
    height: 40px;
    justify-content: baseline;
    align-items: baseline;
    margin-right: auto;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 1.2rem;
    img {
      margin-right: 5px;
      width: 40px;
    }
    span {
      color: #000;
      font-family: 'Oswald', sans-serif;
    }
    &:hover {
      text-decoration: none;
    }
  }
  .btn-menu {
    margin-left: auto;
  }

`

export default MainHeader
