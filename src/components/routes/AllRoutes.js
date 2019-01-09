import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import HorizontalNav from './../layout/HorizontalNav'
import Hero from './../content/Hero'
// import VFFFeed from './../VFFFeed' 
// import DisplayVideoThumbnails from './../DisplayVideoThumbnails' 
import FetchOnDemandVideos from './../../containers/FetchOnDemandVideos'
import Page404 from './../views/404Page'
import MoviesStyle from './../styles/StyleMoviesPage'


/**
 * TODO: FIND A WAY TO DEFINE THESE ROUTES IN EXTERNAL FILES
 * ---------------------------------------------------------
 */

const AllRoutes = ({
  openDialog,
  toggleDrawer
}) => {

  const { MoviesContainer } = MoviesStyle

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
                <MoviesContainer>
                  <HorizontalNav
                    className="App-horizontalNav"
                    dialogLoginHandleOpen={openDialog}
                    onClick1={toggleDrawer}
                    leftNavActive={true}
                  />
                  <Hero />
                  <section className="maincontent-center">
                    <FetchOnDemandVideos
                      category="..."
                    />
                  </section>
                </MoviesContainer>
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
          path={'/Films/:id'}
          exact
          render={
            (props) => {
              return(
                <MoviesContainer>
                  <HorizontalNav
                    className="App-horizontalNav"
                    dialogLoginHandleOpen={openDialog}
                    onClick1={toggleDrawer}
                  />
                  {/* <Hero /> */}
                  <section className="maincontent-center">
                    <FetchOnDemandVideos
                      id={props.match.params.id}
                    />
                  </section>
                </MoviesContainer>
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
                    <VFFFeed
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
  )
}

export default AllRoutes
