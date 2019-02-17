/**
 * Feeds for: Videos On Demand (FetchAllVideos)
 */

import React from 'react'
import Vimeo from 'vimeo'
import configs from './../settings/vimeoConfig'
// import PropTypes from 'prop-types'


class VimeoComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contentReady: false,
    }

    this.user_id = configs.user_id
    this.reqUri
    // this.reqUri = `/users/${this.user_id}/ondemand/pages/`
    this.client_id = configs.client_id
    this.client_secret = configs.client_secret
    this.access_token = configs.access_token
    this.client = new Vimeo.Vimeo(this.client_id, this.client_secret, this.access_token)
    this.test111 = '?????'
  }




  /**
   * Fetch videos from VIMEO:
   * - If a category is provided, filter result, otherwise return result
   * - save result into state.body
   */
  fetchData = (uri) => { 

    // console.log(' ==== [parent fetchData] ==== ', uri)

    // Fetch videos from vimeo API
    this.client.request({
      method: 'GET',
      path: uri,
    }, (error, body, status_code, headers) => {
      if (error) {
        console.log(error)
      }
      // console.log(' ==== [parent fetchData] -- body ', body, ' - ', this._isMounted)

      if (body && this._isMounted) {
        this.setState({ body })
      }
    }) // [end] client.request
  } // [end]

  componentDidMount() {
    // console.log(' **', this.displayName,'**============ [parent componentDidMount] =======  ', this._isMounted)
    this._isMounted = true
    this.fetchData(this.reqUri)
    // console.log('this._isMounted ', this._isMounted)
  }


  componentWillUnmount() {
    this._isMounted = false
  }


  render() {
    // console.log(' ============ [parent render] ======= ', this.state)

    // console.log('- [FetchAllVideos] render')

    const { body } = this.state
    const { id } = this.props
  
    return (
      <div>
        {
          this.props.children(body)
        }
      </div>
    )
  }
}





 
// class FetchAllVideos extends React.Component {
export class FetchAllVideos extends VimeoComponent {

  constructor(props) {
    super(props)
    this.reqUri = `/users/${this.user_id}/videos`
    this.displayName = 'FetchAllVideos'
    // console.log('>>>>>this.test111=', this.test111)
  }
}


 
// class FetchAllVideos extends React.Component {
export class FetchVideo extends VimeoComponent {

  constructor(props) {
    super(props)
    this.reqUri = `/videos/${this.props.id}`
    this.displayName = 'FetchVideo'
    // console.log('>>>>>this.test111=', this.test111)
  }
}






// FetchAllVideos.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default VimeoComponent
