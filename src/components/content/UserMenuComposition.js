import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

import IconButton from '@material-ui/core/IconButton'; 
import IconLogin from '@material-ui/icons/Person';

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";



export default class UserMenuComposition extends React.Component {

  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };



  render() {

    const { open } = this.state;

    const Div = styled.nav`
      .icon {
        color: ${theme.color.gray}!important;
      }
    `;


    return (
      <Div>
        <Link to="/connect">
          <IconButton
            className={'icon'}
            aria-label="Connect"
          >
            <IconLogin />
          </IconButton>
        </Link>
        <IconButton
          className={'icon'}
          aria-label="User Account"
          buttonRef={node => {
            this.anchorEl = node;
          }}
          onClick={this.handleToggle}
        >
          <IconLogin />
        </IconButton>
  
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Div>
    );
  }

}