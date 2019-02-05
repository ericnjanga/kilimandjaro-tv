import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import AppPresentationStyles from './components/styles/StyleAppPresentation';

import styled from 'styled-components' //https://www.styled-components.com/docs/basics#styling-any-components

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


// import PropTypes from 'prop-types'
// import Admin from './terminals/admin/Admin.js'; 
import { GlobalContext } from './settings/basics.js';
import PreloaderScreen from './components/PrelaoderScreen';
import DialogLogin from './components/content/DialogLogin';
import Drawer from './components/layout/Drawer';
import VerticalNav from './components/layout/VerticalNav';

import AllRoutes from './components/routes/AllRoutes';




const MainNav = styled.nav`
  display: flex;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1700px;
  padding-left: 20px;
  padding-right: 5px;
  align-items: center;

  .brand {
    margin-right: auto;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
  .btn-menu {
    margin-left: auto;
  }

`


class AppPresentation extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dialogLogin: false,
  //     // drawer: false,
  //   };
  // }

  // dialogLoginHandleOpen = () => {
  //   let { dialogLogin } = this.state;
  //   dialogLogin = true;
  //   this.setState({ dialogLogin });
  // };

  // dialogLoginHandleClose = () => {
  //   let { dialogLogin } = this.state;
  //   dialogLogin = false;
  //   this.setState({ dialogLogin });
  // };

  
  render() {

    // console.log('[render] -AppPresentation');

    const { 
      DivApp,
      DivAppMainContent,
    } = AppPresentationStyles;
 
    const {
      appLoader,
      drawer,
      dialogLogin,
      toggleDrawer,
      dialogLoginHandleOpen,
      dialogLoginHandleClose,
    } = this.props;

    if(!appLoader.firstRenderReady) {
      return (
        <PreloaderScreen
          appLoader={appLoader}
        />
      );
    }

    return(
      <React.Fragment> 

        <Router>
          <DivApp>
            {/* ... */}
            <GlobalContext.Consumer>
              {
                (global) => (
                  global && !global.user
                  &&
                  <DialogLogin
                    open={dialogLogin}
                    handleOpen={dialogLoginHandleOpen}
                    handleClose={dialogLoginHandleClose}
                  />
                  // :
                  // this.dialogLoginHandleClose()
                )
              }
            </GlobalContext.Consumer>

            

            <Drawer
              active={drawer}
              toggle={toggleDrawer}
            />



            <MainNav>
              <h1 className="brand">Kilimandjaro TV</h1>


              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className="btn-menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </MainNav>



            <DivAppMainContent>
              <AllRoutes
                openDialog={dialogLoginHandleOpen}
                toggleDrawer={toggleDrawer}
              />
            </DivAppMainContent>

          </DivApp>  
        </Router>
      </React.Fragment>
    );
  }

};


// // Props validation
// AppPresentation.propTypes = {
//   handleUserLogin: PropTypes.func.isRequired, 
// };

// AppPresentation.defaultProps = {
// };


export default AppPresentation;
