import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
 
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components


// import PropTypes from 'prop-types';
import Admin from './terminals/admin/Admin.js';
// import CarsPresentation from './terminals/visitor/CarsPresentation.js';
// import AdminLogin from './terminals/admin/login';
// import DialogInfo from './terminals/widgets/DialogInfo.js'
import { GlobalContext } from './settings/basics.js';
import PreloaderScreen from './components/PrelaoderScreen';
import Page404 from './terminals/404Page';

import Grid1 from './components/tests/Grid1'; 

import Drawer from './components/layout/Drawer';
import HorizontalNav from './components/layout/HorizontalNav';

import VerticalNav from './components/layout/VerticalNav';

import Logo from './components/content/Logo';

import IconMenu from '@material-ui/icons/Menu';

import theme from './settings/theme';



const DivApp = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100%;


  // Toggling "vertical nav" and "large logo" on viewport change
  // ------------------------
  .App-verticalNav {
    display: none;
  }
  .App-brand__large {
    display: flex!important;
  }
  @media (min-width: 900px) {
    .App-verticalNav {
      display: flex;
    }
    .App-brand__large {
      display: none!important;
    }
  }


  @media (max-width: 899px) {
    .maincontent-center {
      padding-top: 0;
      margin-top: 30px;
    }
  }


  @media (min-width: 900px) {
    .App-horizontalNav,
    .maincontent-center {
      margin: 0 auto;
      width: ${(theme.videoThumbnail.maxWidth * 4) + theme.videoThumbnail.padding}px;
    }
  }



`;
const DivAppMainContent = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${theme.color.lightGray};


  .maincontent-center {
    overflow-y: scroll;
    padding: 15px;
  }
`;





class AppPresentation extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   drawer: false,
    // };
  }


  render() {
 
    const {
      appLoader,
      classes,
      drawer,
      toggleDrawer,
    } = this.props;

    if(!appLoader.firstRenderReady) {
      return (
        <PreloaderScreen
          appLoader={appLoader}
        />
      );
    }

 

    
    console.log('[render] -AppPresentation');

    return(
      <React.Fragment> 

        <Router>
          <DivApp>

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
                            {/*
                              Display only auth panel is user is not admin
                              -----------------
                            */}
                            {/* <GlobalContext.Consumer>
                              {
                                (global) => (
                                  global && !global.adminUser &&
                                  <AuthPresentation
                                    className="screen-auth screen-fixed opaque-black full-screen"
                                    active={authPanel.active}
                                    handleLogin={handleUserLogin}
                                  />
                                )
                              }
                            </GlobalContext.Consumer> */}

                            <Grid1 /> 
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
                            <h1>Troubleshoot</h1>
                            <h3>Is category passed?</h3>
                            <h3>Preloader?</h3>
                            <h3>Switch between request?</h3>
                            <h3>How empty results are handled?</h3>
                            <Grid1
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
