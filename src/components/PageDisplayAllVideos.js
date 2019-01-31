/**
 * ...
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
/**
 * Code optimization:
 * `memoize-one` will reuse the last return value if  arguments haven't changed since the last render.
 */
// import memoize from 'memoize-one'

import MoviesStyle from './styles/StyleMoviesPage'
import HorizontalNav from './layout/HorizontalNav'
import TvVideosGridStyle from './styles/StyleTvVideosGrid'
import VideoThumbnail from './VideoThumbnail'
import Preloader from './Preloader'


class PageDisplayAllVideos extends Component {

  render() {

    const {
      allVideos,
      openDialog,
      toggleDrawer,
      category
    } = this.props

    const {
      MoviesContainer,
    } = MoviesStyle

    const {
      DivRow,
    } = TvVideosGridStyle
  
    // Display preloader if video is not yet available
    if (!allVideos) {
      return (
        <Preloader
          text={'Chargement des vidéos'}
        />
      )
    }

    const videoList = allVideos.filter(video => video.tags[0] && video.tags[0].name===category)

    console.log('>>>>>>>>', category==='vod' || false)
  
    return (
      <MoviesContainer>
        <HorizontalNav
          className="App-horizontalNav"
          dialogLoginHandleOpen={openDialog}
          onClick1={toggleDrawer}
          leftNavActive={true}
        />
        <section className="maincontent-center">
          <DivRow>
            {
              videoList.map((video, index) => 
                <div className="col">
                  <VideoThumbnail
                    id={video.uri.split('/videos/')[1]}
                    key={index}
                    data={video}
                    isOnDemand={category==='vod' || false}
                  />
                  {
                    // <div>
                  //   -video 1
                  //   -video.name
                  //   -video.uri
                  //   -video.pictures.sizes[0].link
                  // </div>
                  }
                </div>
              )
            }
          </DivRow>
        </section>
      </MoviesContainer>
    )
  }
}
 
export default PageDisplayAllVideos
