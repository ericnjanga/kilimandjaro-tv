/**
 * Feeds for: Videos On Demand (DisplayVideoThumbnails)
 */

import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import VFFFeedStyle from './styles/StyleThumbailVOD'
import VideoThumbnail from './VideoThumbnail'
import Preloader from './../components/Preloader'


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
                key={index}
                data={video}
                isOnDemand
              />
            </div>
          ))
          :
          <Preloader
            text={'Chargement des vidéos'}
          />
        }
      </DivRow>
    )
  }

}



// DisplayVideoThumbnails.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default DisplayVideoThumbnails
