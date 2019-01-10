/**
 * VIDEO:
 * for ondemand videos: video.isOnDemand?
 */

import React from 'react'
import Button from "@material-ui/core/Button"
import IconVideo from '@material-ui/icons/PlayCircleOutline'

import VideoStyle from './styles/StyleVideo'
import ModalVideo from './ModalVideo'
// import VODPricing from './VODPricing'


const { 
  DivGlobalContainer,
  DivVidObjectContainer,
} = VideoStyle

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
      // data:{category, id},
      onClick,
      data, //:{ uri, trailer, pictures, metadata, name }, //duration},
    } = this.props

    const {
      // data:{category, id},
      data:{ name, pictures }, //duration},
    } = this.props

    // console.log('[render] - video', this.props.data)
    // console.log('trailer', data)

    // const { modal } = this.state 
    // const trailerVideoId = trailer.uri.split('/videos/')[1] 
    // const freeVideoId = uri.split('/videos/')[1]
    // const imgUrl = pictures.sizes[3].link

    return(
      <DivGlobalContainer>
        <DivVidObjectContainer
          onClick={onClick}
        >
          <IconVideo className="icon" />
          <img 
            src={pictures.sizes[3].link}
            // alt={metadata.name}
          />
          <Duration />
        </DivVidObjectContainer>
        { name }
              {/* <VODPricing
                {...video.rent}
              /> */}
              <footer className="footer-cta">
                <Button 
                    size="small"
                    variant="contained"
                    className="btn-cta"
                    onClick={this.toggleModal}
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
              {/* { console.log('*******video.rent=', video.rent) } */}


        <ModalVideo
          active={modalActive}
          toggle={this.toggleModal}
          videoId={data.uri.split('/videos/')[1]}
          title={data.name}
        />

        {/* <section className="metadata">
          <h3 className="metadata-title">{name}</h3>
        </section>

        <ModalVideo
          active={modal.active}
          toggle={this.toggleModal}
          videoId={trailerVideoId}
        /> */}
      </DivGlobalContainer>
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


export default VideoThumbnail
// export default withStyles(styles)(Video)
