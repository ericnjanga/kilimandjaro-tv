/**
 * Feeds for: Videos On Demand (FetchVideos)
 */

import React from 'react'
import Vimeo from 'vimeo'
import configs from './../settings/vimeoConfig'
// import PropTypes from 'prop-types'


// const { 
//   DivRow,
// } = VFFFeedStyle
 
class FetchVideos extends React.Component {

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

    console.log(' =========================== ')

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
        this.setState({ data, category })
        // console.log(' ............. [fetchData] ---------: ', data)

        // const tempVods = data.filter(video => video.tags[0] && video.tags[0].name === 'trailer')

        // /**
        //  * For now:
        //  * Artificially add more information on videos (better option coming)
        //  */
        // const vods = tempVods.map(vod => {
        //   const onDemand = {
        //     id: '', // vimeoID
        //     price: {
        //       cad: '',
        //       usd: '',
        //       eur: '',
        //     }
        //   }
 
        //   vod.onDemand = onDemand
        //   return vod
        // })
        
        // console.log(' ............. [fetchData] ---------: ', vods)
      }
    }) // [end] client.request
  }


  componentDidMount() {

    // console.log('- [FetchVideos] componentDidMount ' )
    this.fetchVideos(this.props)

  }

  /**
   * Fetch new videos if a different category is received
   * @param {*} newProps 
   */
  componentWillReceiveProps(newProps) {

    const { category } = newProps

    if(category !== this.state.category) {

      // console.log(`- [FetchVideos] componentWillReceiveProps - Fetching new videos filtered by ${category}`)
      this.fetchVideos(newProps)
    }
  }


  componentWillUnmount() {
    // console.log('- [FetchVideos] componentWillUnmount ' )
    // this._isMounted = false
    // OFF vimeo.request ???
  }


  render() {

    // console.log('- [FetchVideos] render')

    const { data } = this.state
    const { id } = this.props
  
    return (
      <div>
        {
          this.props.children(data)
        }
      </div>
    )
  }
}






// FetchVideos.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default FetchVideos
