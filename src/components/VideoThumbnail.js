/**
 * VIDEO:
 * for ondemand videos: video.isOnDemand?
 */

import React from 'react'
import Button from "@material-ui/core/Button"
import { NavLink } from 'react-router-dom'
import IconVideo from '@material-ui/icons/PlayCircleOutline'

import VideoStyle from './styles/StyleThumbnailTV'
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
    console.log('>>>>>>>>>>>>>>>>>>toggleModal')
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

    const ThumbContainer = isOnDemand ? ThumbailVODContainer : ThumbailTVContainer;

    // console.group('VideoThumbnail')
    // console.log(this.props)
    // console.groupEnd()

    
    return(
      <ThumbContainer>

{
                    // <div>
                  //   -video 1
                  //   -video.name
                  //   -video.uri
                  //   -video.pictures.sizes[0].link
                  // </div>
                  }
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

        <h3 className="thumbnail-title">{ name }</h3>

        <FooterDisplay
          isOnDemand={isOnDemand}
          onClick={this.toggleModal}
        />
            
        <ModalVideo
          isOnDemand={isOnDemand}
          active={modalActive}
          toggle={this.toggleModal}
          videoId={data.uri.split('/videos/')[1]}
          title={data.name}
        />
      </ThumbContainer>
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


const ThumbnailWrapper = (props) => {

  if (props.isOnDemand) {
    return (
      <div {...props}>
        { props.children }
      </div>
    )
  }
  else {
    return (
      <NavLink
        to={`/tv/${props.id}`}
      >
        { props.children }
      </NavLink>
    )
  }
}


const ThumbnailDisplay = (props) => {

  const {
    id,
    img,
    onClick,
    isOnDemand,
  } = props

  // console.group('VideoThumbnail')
  // console.log(id,
  //   img,
  //   onClick,
  //   isOnDemand)
  // console.groupEnd()

  const imgSrc = img.sizes[3].link

  return (
    <ThumbnailWrapper {...props}>
      {
        !isOnDemand && <IconVideo className="icon" />
      }    
      <img
        src={imgSrc}
        className='img-thumbnail'
        // alt={metadata.name}
      />
      <Duration

      />
    </ThumbnailWrapper>
  )

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
        color="primary"
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
