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

    console.log('>>>>>>>>', category==='vod' || false)
  
    return (
      <MoviesContainer>
        <HorizontalNav
          className="App-horizontalNav"
          dialogLoginHandleOpen={openDialog}
          onClick1={toggleDrawer}
          leftNavActive={true}
        />
        <Container className="maincontent-center">
          <Row>
            {
              videoList.map((video, index) => 
                <Col
                  key={index}
                >
                  <VideoThumbnail
                    id={video.uri.split('/videos/')[1]}
                    data={video}
                    isOnDemand={category==='vod' || false}
                  />
              </Col>
              )
            }
          </Row>
        </Container>
      </MoviesContainer>
    )
  }
}
 
export default PageDisplayAllVideos
