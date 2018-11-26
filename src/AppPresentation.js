import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import AppPresentationStyles from './components/styles/StyleAppPresentation';
// import PropTypes from 'prop-types';
import Admin from './terminals/admin/Admin.js'; 
import { GlobalContext } from './settings/basics.js';
import PreloaderScreen from './components/PrelaoderScreen';
import Page404 from './terminals/404Page';
import VideosFeed from './components/tests/VideosFeed'; 
import DialogLogin from './components/content/DialogLogin';
import Drawer from './components/layout/Drawer';
import HorizontalNav from './components/layout/HorizontalNav';
import VerticalNav from './components/layout/VerticalNav';
import Logo from './components/content/Logo';
import IconMenu from '@material-ui/icons/Menu';


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

            <VerticalNav
              className="App-verticalNav"
            />
            <DivAppMainContent>
              <HorizontalNav
                className="App-horizontalNav"
                dialogLoginHandleOpen={dialogLoginHandleOpen}
              >
                <section className="App-brand__large">
                  <button
                    onClick={toggleDrawer}
                  >
                    <IconMenu />
                  </button>
                  <Link to="/">
                    <Logo size="large" />
                  </Link>
                </section>
              </HorizontalNav>
               
              
              <section className="maincontent-center">
                <Switch>
                  {/* 
                    Welcome screen:
                    --------------
                    - ...
                  */}
                  <Route 
                    path={'/'}
                    exact
                    render={
                      () => {
                        return(
                          <React.Fragment>
                            <VideosFeed /> 
                          </React.Fragment>
                        )
                      }
                    }
                  />


                  {/* 
                    Search:
                    --------------
                    - ...
                  */}
                  <Route 
                    path={'/search'}
                    exact
                    render={
                      () => {
                        return(
                          <React.Fragment>
                            <h1>Search</h1>
                          </React.Fragment>
                        )
                      }
                    }
                  />


                  {/* 
                    My account:
                    --------------
                    - ...
                  */}
                  <Route 
                    path={'/my-account'}
                    exact
                    render={
                      () => {
                        return(
                          <React.Fragment>
                            <h1>My Account</h1>
                          </React.Fragment>
                        )
                      }
                    }
                  />


                  {/* 
                    Profile:
                    --------------
                    - ...
                  */}
                  <Route 
                    path={'/profile'}
                    exact
                    render={
                      () => {
                        return(
                          <React.Fragment>
                            <h1>Profile</h1>

                            {/*
                              ...
                              -----------------
                            */}
                            <GlobalContext.Consumer>
                              {
                                (global) => (
                                  global && global.user &&
                                  <div>
                                    { global.user.email } <br />
                                    { global.user.uid } <br />
                                  </div>
                                )
                              }
                            </GlobalContext.Consumer>
                          </React.Fragment>
                        )
                      }
                    }
                  />


                  {/* 
                    Films:
                    --------------
                    - ...
                  */}
                  <Route 
                    path={'/Films'}
                    exact
                    render={
                      () => {
                        return(
                          <React.Fragment>
                            <VideosFeed
                              category="film"
                            /> 
                          </React.Fragment>
                        )
                      }
                    }
                  />


                  {/* 
                    News:
                    --------------
                    - ...
                  */}
                  {/* <Route 
                    path={'/News'}
                    exact
                    render={
                      () => {
                        return(
                          <React.Fragment>
                            <h1>News</h1>
                          </React.Fragment>
                        )
                      }
                    }
                  /> */}


                  {/* 
                    Buzz:
                    --------------
                    - ...
                  */}
                  <Route 
                    path={'/Buzz'}
                    exact
                    render={
                      () => {
                        return(
                          <React.Fragment>
                            <h1>Buzz</h1>
                            <VideosFeed
                              category="buzz"
                            /> 
                          </React.Fragment>
                        )
                      }
                    }
                  />


                  {/* 
                    Connect:
                    --------------
                    - ...
                  */}
                  <Route 
                    path={'/Connect'}
                    exact
                    render={
                      () => {
                        return(
                          <React.Fragment>
                            <h1>Connect</h1>
                          </React.Fragment>
                        )
                      }
                    }
                  />


                  {/* 
                    Tickets:
                    --------------
                    - ...
                  */}
                  <Route 
                    path={'/Tickets'}
                    exact
                    render={
                      () => {
                        return(
                          <React.Fragment>
                            <h1>Tickets</h1>
                          </React.Fragment>
                        )
                      }
                    }
                  />


                {/* 
                  Admin: 
                  ------
                  - Unauthenticated users:
                  -- Redirected to'/admin/'
                  -- Never get to '/admin/:id'
                  -- Top nav (not visible)
                  - Authenticated users:
                  -- Redirected to '/admin/:id'
                  -- Never get to '/admin/'
                  -- Top nav (visible)
                
                <Route path={'/admin'} exact render={(props) => (
                  <React.Fragment>
                    --- Declaring '/admin/' route with content (redirecting to 'admin landing' if authenticated) ---
                    <GlobalContext.Consumer>
                      {
                        (global) => (
                          global && global.adminUser ? 
                          <Redirect to={{ pathname:'/admin/admin-user' }} />
                          :
                          <AdminLogin
                            handleLogin={handleAdminLogin}
                          />
                        )
                      }
                    </GlobalContext.Consumer>
                  </React.Fragment>
                )} />
                */}

                <Route path={'/admin'} render={(props) => (
                  <React.Fragment>
                    {/* Declaring '/admin/:id' route with content (redirecting to 'admin login' if unauthenticated) */}
                    <Route path={'/admin/:id'} render={(props) => (
                      <GlobalContext.Consumer>
                        {
                          (global) => (
                            global && global.adminUser ? 
                            <React.Fragment> 
                              <Admin />
                            </React.Fragment>
                            :
                            <Redirect to={{ pathname:'/admin' }} />
                          )
                        }
                      </GlobalContext.Consumer>
                    )} />
                  </React.Fragment>
                )} />
                
              
                {/*
                  404 Page: 
                  ---------
                  - Top nav (visible)
                  - 404 content
                */}
                <Route 
                  render={
                    () => {
                      return(
                        <React.Fragment> 
                          <Page404 />
                        </React.Fragment>
                      )
                    }
                  }
                />
              </Switch>
            

              </section>
                
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
