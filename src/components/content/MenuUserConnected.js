import React from 'react';
import firebase from './../../settings/firebase-configs';
import MenuUserConnectedStyles from './../styles/StyleMenuUserConnected';

import IconButton from '@material-ui/core/IconButton'; 
import IconLogin from '@material-ui/icons/Person';

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

export default class MenuUserConnected extends React.Component {

  state = {
    openMenu: false
  };

  handleToggleMenu = () => {
    this.setState(state => ({ openMenu: !state.openMenu }));
  };

  handleCloseMenu = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ openMenu: false });
  };


  handleLogout = (event) => {
    this.handleCloseMenu(event);

    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  };


  render() {

    const { 
      Div
    } = MenuUserConnectedStyles;

    const { openMenu } = this.state;

    return (
      <Div>
        <IconButton
          className={'icon'}
          aria-label="User Account"
          buttonRef={node => {
            this.anchorEl = node;
          }}
          onClick={this.handleToggleMenu}
        >
          <IconLogin />
        </IconButton>
  
        <Popper open={openMenu} anchorEl={this.anchorEl} transition disablePortal>
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
                <ClickAwayListener onClickAway={this.handleCloseMenu}>
                  <MenuList>
                    <MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
                    <MenuItem onClick={this.handleCloseMenu}>My account</MenuItem>
                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
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
