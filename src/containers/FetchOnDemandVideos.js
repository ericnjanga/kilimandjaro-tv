/**
 * Feeds for: Videos On Demand (FetchOnDemandVideos)
 */

import React from 'react'
import Vimeo from 'vimeo'
import CircularProgress from '@material-ui/core/CircularProgress'
import configs from './../settings/vimeoConfig'
import VODPage from './../components/VODPage'
import VODFeed from './../components/VODFeed' 
// import PropTypes from 'prop-types'





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
    this.uri = `/users/${this.user_id}/ondemand/pages/`
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
    // console.log(` [fetchData] ---------: ${category}`)

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
        // if(category){
        //   data = data.filter(data => data.tags[0] && data.tags[0].name===category)
        // }
        
        console.log(' [fetchData] ---------: ', data)
        this.setState({ data, category })
      }
    
    }) // [end] client.request
  }


  componentDidMount() {

    console.log('- [FetchOnDemandVideos] componentDidMount ' )
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
    console.log('- [FetchOnDemandVideos] componentWillUnmount ' )
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


const Result = (props) => {
  if(props.id) {
    const video = props.data.filter(video => video.film.uri.split('/videos/')[1]===props.id )
    return (
      <VODPage
        id={props.id}
        video={video[0]}
      />
    )
  }

  return (
    <VODFeed
      category="film"
    />
  )
}


// FetchOnDemandVideos.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default FetchOnDemandVideos
