import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import HorizontalNav from './../layout/HorizontalNav'
import FetchVideos from './../../containers/FetchVideos'
import Page404 from './../views/404Page'
import MoviesStyle from './../styles/StyleMoviesPage'
import PaypalCheckout from './../PaypalCheckout'
import PageDisplayAllVideos from './../PageDisplayAllVideos'
import PageVideo from './../PageVideo'


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
      <FetchVideos
      >
        {
          (allVideos) => {
            return (
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
                        <Redirect to='/tv' />
                      )
                    }
                  }
                />
    
    
                {/* 
                  TV: ...
                  --------------
                  - ...
                */}
                <Route 
                  path={'/tv'}
                  exact
                  render={
                    () => {
                      return(
                        <PageDisplayAllVideos
                          allVideos={allVideos}
                          category='tv'
                          openDialog={openDialog}
                          toggleDrawer={toggleDrawer}
                        />
                      )
                    }
                  }
                />
    
    
                {/* 
                  TV: ...
                  --------------
                  - Only send the right video
                */}
                <Route 
                  path={'/tv/:videoID'}
                  exact
                  render={
                    (props) =>  (
                      <PageVideo
                        allVideos={allVideos}
                        id={props.match.params.videoID}
                        openDialog={openDialog}
                        toggleDrawer={toggleDrawer}
                      />
                    )
                  }
                />
    
    
                {/* 
                  Films: StyleMoviesPage.js
                  --------------
                  - ...
                */}
                <Route 
                  path={'/films'}
                  exact
                  render={
                    () => {
                      return(
                        <PageDisplayAllVideos
                          allVideos={allVideos}
                          category='vod'
                          openDialog={openDialog}
                          toggleDrawer={toggleDrawer}
                        />
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
                            {/* <PageDisplayAllVideos
                              id={props.match.params.id}
                            /> */}
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
                  path={'/404'}
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
            )
          }
        }
      </FetchVideos>
    </React.Fragment>
  )
}

export default AllRoutes
