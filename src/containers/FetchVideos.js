/**
 * Feeds for: Videos On Demand (FetchVideos)
 */

import React from 'react'
import Vimeo from 'vimeo'
import configs from './../settings/vimeoConfig'
// import PropTypes from 'prop-types'


 
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

    // console.log(' =========================== ', this.client.request)

    // Fetch videos from vimeo API
    this.client.request({
      method: 'GET',
      path: this.uri,
    }, (error, body, status_code, headers) => {
      if (error) {
        console.log(error)
      }

      // Filter result by category (if available)
      if (body && this._isMounted) {
        let { data } = body
        this.setState({ data, category })
      }
    }) // [end] client.request
  }


  componentDidMount() {
    this._isMounted = true
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
    this._isMounted = false
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
