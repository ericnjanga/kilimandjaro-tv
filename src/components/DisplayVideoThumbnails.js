/**
 * Feeds for: Videos On Demand (DisplayVideoThumbnails)
 */

import React from 'react'
// import Vimeo from 'vimeo'
// import { NavLink } from "react-router-dom" 
import CircularProgress from '@material-ui/core/CircularProgress'
import VFFFeedStyle from './styles/StyleVFFFeed'
// import configs from './../settings/vimeoConfig'
import VideoThumbnail from './VideoThumbnail'
// import PropTypes from 'prop-types'


const { 
  DivRow,
} = VFFFeedStyle
 
class DisplayVideoThumbnails extends React.Component {

  constructor(props) {
    super(props)
  }
  

  render() {

    const { list } = this.props

    return (
      <DivRow>
        {
          list 
          ?
          list.map((video, index) => (
            <div className="col" key={video.uri}>
              <VideoThumbnail
                data={video}
                isOnDemand
                onClick={this.toggleModal}
              />
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
