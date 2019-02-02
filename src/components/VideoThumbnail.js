/**
 * VIDEO:
 * for ondemand videos: video.isOnDemand?
 */

import React from 'react'
import Button from "@material-ui/core/Button"
import { NavLink } from 'react-router-dom'
import IconVideo from '@material-ui/icons/PlayCircleOutline'

import VideoStyle from './styles/StyleVideo'
import ThumbailVODStyle from './styles/StyleThumbailVOD'
import ModalVideo from './ModalVideo'
// import VODPricing from './VODPricing'


const { 
  ThumbailTVContainer,
} = VideoStyle
const {
  ThumbailVODContainer,
} = ThumbailVODStyle

class VideoThumbnail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalActive: false
    }
  }


  toggleModal = () => {
    this.setState({
      modalActive: !this.state.modalActive
    })
  }


  render() {

    const { modalActive } = this.state
    const {
      id,
      isOnDemand,
      data, //:{ uri, trailer, pictures, metadata, name }, //duration},
    } = this.props

    const {
      // data:{category, id},
      data:{ name, pictures }, //duration},
    } = this.props

    
    return(
      <ThumbailTVContainer>
        {/* <DivVidObjectContainer
          onClick={this.toggleModal}
        >
          <IconVideo className="icon" />
          <img 
            src={pictures.sizes[3].link}
            // alt={metadata.name}
          />
          <Duration />
        </DivVidObjectContainer> */}

        <ThumbnailDisplay
          id={id}
          isOnDemand={isOnDemand}
          img={pictures}
          onClick={this.toggleModal}
        />

        {
          !isOnDemand &&
          <h3 className="thumbnail-title">{ name }</h3>
        }
        

        <FooterDisplay
          isOnDemand={isOnDemand}
          onClick={this.toggleModal}
        />
            
        {
          isOnDemand &&
          <ModalVideo
            active={modalActive}
            toggle={this.toggleModal}
            videoId={data.uri.split('/videos/')[1]}
            title={data.name}
          />
        }
      </ThumbailTVContainer>
    )

  }
}


/**
 * Convert milliseconds into HHh MMm SSs format
 */
const Duration = ({ duration }) => {
  // Duration calculations will happen here
  return (
    <time dateTime="3m 30s">3:30 min</time>
  )
}


const ThumbnailDisplay = ({
  id,
  img,
  onClick,
  isOnDemand,
}) => {

  const imgSrc = img.sizes[3].link

  if (isOnDemand) {
    return (
      <ThumbailVODContainer
        onClick={onClick}
      >
        <IconVideo className="icon" />
        <img
          src={imgSrc}
          // alt={metadata.name}
        />
        <Duration />
      </ThumbailVODContainer>
    ) 
  } else {
    return (
      <div>
        <NavLink
          to={`/tv/${id}`}
        >
          <img
            src={imgSrc}
            // alt={metadata.name}
          />
        </NavLink>
      </div>
    ) 
  }

}


const FooterDisplay = ({
  isOnDemand,
  onClick
}) => {
  if(!isOnDemand) {
    return false
  }

  return (
    <footer className="footer-cta">
      <Button 
          size="small"
          variant="contained"
          className="btn-cta"
          onClick={onClick}
        >
        Bande D'annonce
      </Button>
      {/* 
      <NavLink
        to={{
          pathname: `/films/${video.film.uri.split('/videos/')[1]}`
        }}
      >
        <Button 
            size="small"
            variant="contained"
            className="btn-cta"
          >
          Visionner
        </Button>
      </NavLink> */}
    </footer>
  )
}


export default VideoThumbnail
// export default withStyles(styles)(Video)
