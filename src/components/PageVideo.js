/**
 * ...
 */

import React, { Component } from 'react'
/**
 * Code optimization:
 * `memoize-one` will reuse the last return value if  arguments haven't changed since the last render.
 */
import memoize from 'memoize-one'


import configs from './../settings/vimeoConfig'
import Preloader from './../components/Preloader'
import MoviesStyle from './styles/StyleMoviesPage'
// import HorizontalNav from './layout/HorizontalNav'
import ProgressStyle from './styles/StyleProgress'
import IframeResponsiveStyle from './styles/StyleIframeResponsive'


class PageVideo extends Component {

  /**
   * Get active video from a @videoList based on a @videoId
   */
  getTheVideo = memoize(
    (videoList, videoId) => {
      if(!videoList || !videoId) {
        return false
      }
      const theVideo = videoList.filter(vid => {
        const currVidId = vid.uri.split('/videos/')[1]
        return `${currVidId}` === `${videoId}`
      })[0]
      return theVideo
    }
  )

  render() {
    const {
      id, 
      allVideos,
      openDialog,
      toggleDrawer
    } = this.props
  
    // Display preloader if video is not yet available
    if (!allVideos) {
      return (
        <Preloader
          text={'Loading'}
        />
      )
    } else {

      // Get the active video
      const theVideo = this.getTheVideo(allVideos.data, id)

      if (!theVideo) {
        return (
          <Preloader
            text={'Sorry, but we couldn\'t find the video'}
          />
        )
      } else {
  
        const { MoviesContainer } = MoviesStyle
        const {
          Iframe,
        } = IframeResponsiveStyle
        const {
          ProgressContainer,
        } = ProgressStyle
      
        const uri = `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=${configs.app_id}`
        const { name, description } = theVideo
      
        return (
          <MoviesContainer>
            <header className="player-container">
              <div className="container">
                <Iframe>
                  <iframe
                    src={uri}
                    width="100%"
                    height="620"
                    frameBorder="0"
                    title={name}
                    allow="autoplay;
                    fullscreen"
                    allowFullScreen
                  />
                </Iframe>
              </div>
            </header>
      
            <section>
              <div className="container padding">
                <h1 className="title">
                  {name}
                </h1>
                <p>{description}</p>
    
    
                <div>
                  <h3>More videos</h3>
                  <p>List of video suggestions coming soon...</p>
                </div>
              </div>
            </section>
          </MoviesContainer>
        )
      }
    }
  }
}
 
export default PageVideo
