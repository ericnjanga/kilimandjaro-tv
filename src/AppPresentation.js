import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Admin from './terminals/admin/Admin.js';
import CarsPresentation from './terminals/visitor/CarsPresentation.js';
import AdminLogin from './terminals/admin/login';
import DialogInfo from './terminals/widgets/DialogInfo.js'
import TopNavigation from './terminals/TopNavigation.js';
import { GlobalContext } from './settings/basics.js';
import PreloaderScreen from './components/PrelaoderScreen';
import Page404 from './terminals/404Page';

import Grid1 from './components/tests/Grid1';
import GridVertical from './components/tests/GridVertical';


class AppPresentation extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const {
      handleAdminLogin,
      handleUserLogin,
      dialogInfo,
      appLoader,
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
        
        <DialogInfo
          {...dialogInfo}
        />

        <Router>
          <div className="App">
            <aside className="App-sidedisplay">
              <GridVertical

              />
            </aside>
            <section className="App-maincontent">
              <Switch>
                {/* 
                  Welcome screen:
                  --------------
                  - Top nav (visible)
                  - Cars presentation
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
                
                          {/* <TopNavigation /> */}

                          <section className="App-horizontal-annonces">
                            <ul className="App-horizontal-annonces-frame">
                              <li className="item">
                                Progressive Web Apps
                              </li>
                              <li className="item">
                                React Apps
                              </li>
                              <li className="item">
                                elementary my dear watson
                              </li>
                              <li className="item">
                                Enterprise Level Applications
                              </li>
                              <li className="item">
                                Walmart Labs is killiing it!
                              </li>
                              <li className="item">
                                Explosive party tonight
                              </li>
                              <li className="item">
                                2018 Municipal Elections
                              </li>
                            </ul>
                          </section>
                          <Grid1 />
                          <CarsPresentation
                            handleUserLogin={handleUserLogin}
                          />
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
                */}
                <Route path={'/admin'} exact render={(props) => (
                  <React.Fragment>
                    {/* Declaring '/admin/' route with content (redirecting to 'admin landing' if authenticated) */}
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

                <Route path={'/admin'} render={(props) => (
                  <React.Fragment>
                    {/* Declaring '/admin/:id' route with content (redirecting to 'admin login' if unauthenticated) */}
                    <Route path={'/admin/:id'} render={(props) => (
                      <GlobalContext.Consumer>
                        {
                          (global) => (
                            global && global.adminUser ? 
                            <React.Fragment>
                              <TopNavigation />
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
                          <TopNavigation />
                          <Page404 />
                        </React.Fragment>
                      )
                    }
                  }
                />
              </Switch>
            </section>
          </div>  
        </Router>
      </React.Fragment>
    );
  }

};


// Props validation
AppPresentation.propTypes = {
  handleUserLogin: PropTypes.func.isRequired, 
};

AppPresentation.defaultProps = {
};


export default AppPresentation;
