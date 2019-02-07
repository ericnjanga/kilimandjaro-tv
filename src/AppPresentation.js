import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom"
import AppStyles from './components/styles/StyleApp'
import MainHeader from './components/MainHeader'

// import PropTypes from 'prop-types'
// import Admin from './terminals/admin/Admin.js'; 
import { GlobalContext } from './settings/basics.js';
import PreloaderScreen from './components/PrelaoderScreen';
import DialogLogin from './components/content/DialogLogin';
import Drawer from './components/layout/Drawer';

import AllRoutes from './components/routes/AllRoutes';





class AppPresentation extends React.Component {
  
  render() {

    const { 
      PageContainer,
    } = AppStyles;
 
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
      <Router>
        <PageContainer> 
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

          <header className="container">
            <MainHeader
              toggleDrawer={toggleDrawer}
            />
          </header>

          <AllRoutes
            openDialog={dialogLoginHandleOpen}
            toggleDrawer={toggleDrawer}
          /> 
        </PageContainer>
      </Router>
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
