import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { GlobalContext } from './../../settings/basics';

/* 
  Profile:
  --------------
  - ...
*/

const RouteProfile = () => {
  return (
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
  );
};

export default RouteProfile;
