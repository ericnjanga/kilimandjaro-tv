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
import ThumbailGridStyle from './styles/StyleThumbailGrid'
import VideoThumbnail from './VideoThumbnail'
import Preloader from './Preloader'
import BigScreen from './BigScreen'

/**
 * - Gets the full list of videos (allVideos)
 * - Extracts a sublist of videos (videoSubList) which will be used to:
 * - - Extract one video to be displayed for the BigScreen (the latest one)
 * - - Display video thumbnails (in a grid)
 */

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
          text={'Loading Videos'}
        />
      )
    }

    const videoSubList = allVideos.data.filter(video => video.tags[0] && video.tags[0].name===category)
    const isOnDemand = category==='vod' || false
    const colSize = isOnDemand ? {  md:4, sm:6, xs:6 } : {  md:6, sm:12 }
    const BigScreenVideo = { obj: videoSubList[0], id:videoSubList[0].uri.split('/videos/')[1] }

    // console.log('>>>>>>>>', category==='vod' || false)
  
    return (
      <React.Fragment>
        <BigScreen
          videoId={BigScreenVideo.id}
          url={`${category}/${BigScreenVideo.id}`}
          video={BigScreenVideo.obj}
        />
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
                videoSubList.map((video, index) => 
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
      </React.Fragment>
    )
  }
}
 
export default PageDisplayAllVideos
