import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom"
import { GlobalContext } from './../../settings/basics'
import Hero from './../content/Hero'
import VideosFeed from './../tests/VideosFeed' 
import Page404 from './../views/404Page'


/**
 * TODO: FIND A WAY TO DEFINE THESE ROUTES IN EXTERNAL FILES
 * ---------------------------------------------------------
 */

const AllRoutes = () => {
  return (
    <React.Fragment>
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
                <Redirect to='/films' />
                // <div>
                //   <Redirect to='/films' />
                //   <Hero />
                //   <section className="maincontent-center">
                //     <VideosFeed /> 
                //   </section>
                // </div>
              )
            }
          }
        />


        {/* 
          Films: StyleMoviesPage.js
          --------------
          - ...
        */}
        <Route 
          path={'/Films'}
          exact
          render={
            () => {
              return(
                <div>
                  {/* <Redirect to='/films' /> */}
                  <Hero />
                  <section className="maincontent-center">
                    <VideosFeed
                      category="film"
                    />
                  </section>
                </div>
              )
            }
          }
        />

      
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

        {/* 
          Search:
          --------------
          - ...
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

          My account:
          --------------
          - ...
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

          Profile:
          --------------
          - ...
          <Route 
            path={'/profile'}
            exact
            render={
              () => {
                return(
                  <React.Fragment>
                    <h1>Profile</h1>

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

          Buzz:
          --------------
          - ...
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

          Connect:
          --------------
          - ...
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

          Tickets:
          --------------
          - ...
          <Route 
            path={'/tickets'}
            exact
            render={
              () => {
                return(
                  <React.Fragment>
                    <h1>Tickets</h1>
                    <p>Inspiration from: https://tlcketmaster-ca.com</p>
                  </React.Fragment>
                )
              }
            }
          />


          Admin: 
          ------ 
          <Route path={'/admin'} render={(props) => (
            <React.Fragment>
              .. Declaring '/admin/:id' route with content (redirecting to 'admin login' if unauthenticated) ..
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

        */}
    </Switch>
  
    </React.Fragment>
  );
};

export default AllRoutes;
