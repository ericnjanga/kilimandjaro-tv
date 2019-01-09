/**
 * Feeds for: Videos On Demand (DisplayVideoThumbnails)
 */

import React from 'react'
import Vimeo from 'vimeo'
import Button from "@material-ui/core/Button"
import { NavLink } from "react-router-dom" 
import CircularProgress from '@material-ui/core/CircularProgress'
import VFFFeedStyle from './styles/StyleVFFFeed'
import configs from './../settings/vimeoConfig'
import Video from './Video'
import VODPricing from './VODPricing'
import ModalVideo from './ModalVideo'
// import PropTypes from 'prop-types'


alert('Regroup "ModalVideo", "footer" into 1 component | Move active modal state into that component')


const { 
  DivRow,
} = VFFFeedStyle
 
class DisplayVideoThumbnails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalActive: false
    }
  }


  toggleModal = () => {
    this.setState({
      modalActive: !this.state.modalActive
    });
  }
  

  render() {

    const { list } = this.props
    const { modalActive } = this.state

    return (
      <DivRow>
        {
          list 
          ?
          list.map((video, index) => (
            <div className="col" key={video.uri}>
              <Video
                data={video}
                isOnDemand
                onClick={this.toggleModal}
              />
              {
                console.log(' .........video : ', video.uri.split('/videos/')[1])
              }
              <ModalVideo
                active={modalActive}
                toggle={this.toggleModal}
                videoId={video.uri.split('/videos/')[1]}
                title={video.name}
              />
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
            </div>
          ))
          :
          <div className="spinner-frame">
            <p>En train de chercher des vidéos</p>
            <CircularProgress />
          </div>
        }
      </DivRow>
    )
  }

}



// DisplayVideoThumbnails.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default DisplayVideoThumbnails
