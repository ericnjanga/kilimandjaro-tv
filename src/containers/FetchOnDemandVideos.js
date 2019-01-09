/**
 * Feeds for: Videos On Demand (FetchOnDemandVideos)
 */

import React from 'react'
import Vimeo from 'vimeo'
import CircularProgress from '@material-ui/core/CircularProgress'
import configs from './../settings/vimeoConfig'
import VODPage from './../components/VODPage'
import DisplayVideoThumbnails from './../components/DisplayVideoThumbnails' 
// import PropTypes from 'prop-types'


console.group("Reminder 1")
console.log("vod ID hidden in tags on vimeo API. Check if that's active")
console.groupEnd()


// const { 
//   DivRow,
// } = VFFFeedStyle
 
class FetchOnDemandVideos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      category: null,
      contentReady: false,
    }

    this.user_id = configs.user_id
    this.uri = `/users/${this.user_id}/videos`;
    // this.uri = `/users/${this.user_id}/ondemand/pages/`
    this.client_id = configs.client_id
    this.client_secret = configs.client_secret
    this.access_token = configs.access_token
    this.client = new Vimeo.Vimeo(this.client_id, this.client_secret, this.access_token)
  }

  /**
   * Fetch videos from VIMEO:
   * - If a category is provided, filter result, otherwise return result
   * - save result into state.data
   */
  fetchVideos = ({ category }) => { 
    // Let state know that content isn't ready (will trigger "circular progress")
    this.setState({ contentReady:false }) 

    // Fetch videos from vimeo API
    this.client.request({
      method: 'GET',
      path: this.uri,
    }, (error, body, status_code, headers) => {
      if (error) {
        console.log(error)
      }

      // Filter result by category (if available)
      if (body) {
        let { data } = body
        // console.log(' ............. [fetchData] ---------: ', data)

        const tempVods = data.filter(video => video.tags[0] && video.tags[0].name === 'trailer')

        /**
         * For now:
         * Artificially add more information on videos (better option coming)
         */
        const vods = tempVods.map(vod => {
          const onDemand = {
            id: '', // vimeoID
            price: {
              cad: '',
              usd: '',
              eur: '',
            }
          }
 
          vod.onDemand = onDemand
          return vod
        })
        
        // console.log(' ............. [fetchData] ---------: ', vods)
        this.setState({ data:vods , category })
      }
    
    }) // [end] client.request
  }


  componentDidMount() { 
    // console.log('- [FetchOnDemandVideos] componentDidMount ' )
    this.fetchVideos(this.props)

  }

  /**
   * Fetch new videos if a different category is received
   * @param {*} newProps 
   */
  componentWillReceiveProps(newProps) {

    const { category } = newProps

    if(category !== this.state.category) {

      // console.log(`- [FetchOnDemandVideos] componentWillReceiveProps - Fetching new videos filtered by ${category}`)
      this.fetchVideos(newProps)
    }
  }


  componentWillUnmount() {
    // console.log('- [FetchOnDemandVideos] componentWillUnmount ' )
    // this._isMounted = false
    // OFF vimeo.request ???
  }


  render() {

    // console.log('- [FetchOnDemandVideos] render')

    const { data } = this.state
    const { id } = this.props
  
    return (
      <div>
        {
          data 
          ?
          <Result
            id={id}
            data={data}
          />
          :
          <div className="spinner-frame">
            <p>En train de chercher des vidéos</p>
            <CircularProgress />
          </div>
        }
      </div>
    )
  }
}
// 

// Renders a "video page" or a "list of videos" thumbnails
const Result = (props) => {

  const { id, data } = props

  console.group('- Result')
  console.log(data)
  console.groupEnd()

  if(id) {
    const video = data.filter(video => video.film.uri.split('/videos/')[1]===id )
    return (
      <VODPage
        id={id}
        video={video[0]}
      />
    )
  }

  return (
    <DisplayVideoThumbnails
      list={data}
    />
  )
}


// FetchOnDemandVideos.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default FetchOnDemandVideos
