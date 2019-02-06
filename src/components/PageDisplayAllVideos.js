/**
 * ...
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
/**
 * Code optimization:
 * `memoize-one` will reuse the last return value if  arguments haven't changed since the last render.
 */
// import memoize from 'memoize-one'

import MoviesStyle from './styles/StyleMoviesPage'
import HorizontalNav from './layout/HorizontalNav'
import ThumbailGridStyle from './styles/StyleThumbailGrid'
import VideoThumbnail from './VideoThumbnail'
import Preloader from './Preloader'
import BigScreen from './BigScreen'


class PageDisplayAllVideos extends Component {

  // getVideoId = (video) => {
  //   return video.uri.split('/videos/')[1]
  // }

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
      ThumbnailsRow,
    } = ThumbailGridStyle
  
    // Display preloader if video is not yet available
    if (!allVideos) {
      return (
        <Preloader
          text={'Chargement des vidéos'}
        />
      )
    }

    const videoList = allVideos.filter(video => video.tags[0] && video.tags[0].name===category)
    const isOnDemand = category==='vod' || false
    const colSize = isOnDemand ? {  md:4, sm:6, xs:6 } : {  md:6, sm:12 }

    console.log('>>>>>>>>', category==='vod' || false)
  
    return (
      <div>
        <BigScreen />
        <MoviesContainer>
          {/* <HorizontalNav
            className="App-horizontalNav"
            dialogLoginHandleOpen={openDialog}
            onClick1={toggleDrawer}
            leftNavActive={true}
          /> */}
          <Container className="maincontent-center">
            <Row>
              {
                videoList.map((video, index) => 
                  <Col
                    key={index}
                    {...colSize}
                  >
                    <VideoThumbnail
                      id={video.uri.split('/videos/')[1]}
                      data={video}
                      isOnDemand={isOnDemand}
                    />
                </Col>
                )
              }
            </Row>
          </Container>
        </MoviesContainer>
      </div>
    )
  }
}
 
export default PageDisplayAllVideos
