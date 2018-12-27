/**
 * Feeds for: Videos On Demand (VODFeed)
 */

import React from 'react'
import Vimeo from 'vimeo'
import CircularProgress from '@material-ui/core/CircularProgress'
import VFFFeedStyle from './styles/StyleVFFFeed'
import configs from './../settings/vimeoConfig'
import Video from './Video'
import VODPricing from './VODPricing'
import Button from "@material-ui/core/Button"
import { NavLink } from "react-router-dom" 
// import PropTypes from 'prop-types'





const { 
  DivRow,
} = VFFFeedStyle
 
class VODFeed extends React.Component {

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

    console.log('- [VODFeed] componentDidMount ' )
    this.fetchVideos(this.props)

  }

  /**
   * Fetch new videos if a different category is received
   * @param {*} newProps 
   */
  componentWillReceiveProps(newProps) {

    const { category } = newProps

    if(category !== this.state.category) {

      // console.log(`- [VODFeed] componentWillReceiveProps - Fetching new videos filtered by ${category}`)
      this.fetchVideos(newProps)
    }
  }


  componentWillUnmount() {
    console.log('- [VODFeed] componentWillUnmount ' )
    // this._isMounted = false
    // OFF vimeo.request ???
  }


  render() {

    // console.log('- [VODFeed] render')

    const { data } = this.state
  
    return (
      <DivRow>
        {
          data 
          ?
          data.map((video, index) => (
            <div className="col" key={video.uri}>
              <Video
                data={video}
                isOnDemand
              />
              <VODPricing
                {...video.rent}
              />
              <footer className="footer-cta">
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
                </NavLink>
              </footer>
              { console.log('*******video.rent=', video.rent) }
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



// VODFeed.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default VODFeed