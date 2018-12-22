import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import VideosFeedStyle from './../styles/StyleVideosFeed';
import Vimeo from 'vimeo';
import configs from './../../settings/vimeoConfig'
// import PropTypes from 'prop-types';

import Video from './../Video';




const { 
  DivRow,
} = VideosFeedStyle;
 
class VideosFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: null,
      contentReady: false,
    };

    this.user_id = '90813794';
    this.uri = `/users/${this.user_id}/videos`;
    this.client_id = configs.client_id
    this.client_secret = configs.client_secret
    this.access_token = configs.access_token
    this.client = new Vimeo.Vimeo(this.client_id, this.client_secret, this.access_token);
  }

  /**
   * Fetch videos from VIMEO:
   * - If a category is provided, filter result, otherwise return result
   * - save result into state.data
   */
  fetchVideos = ({ category }) => {
    console.log(` [fetchData] ---------: ${category}`);

    // Let state know that content isn't ready (will trigger "circular progress")
    this.setState({ contentReady:false }); 

    // Fetch videos from vimeo API
    this.client.request({
      method: 'GET',
      path: this.uri,
    }, (error, body, status_code, headers) => {
      if (error) {
        console.log(error);
      }

      // Filter result by category (if available)
      if (body) {
        let { data } = body;
        if(category){
          data = data.filter(data => data.tags[0] && data.tags[0].name===category)
        }
        
        console.log(' [fetchData] ---------: ', data);
        this.setState({ data, category });
      }
      
      // Body contains:
      // data: (3) [{…}, {…}, {…}]
      // page: 1
      // paging: {next: null, previous: null, first: "/users/90813794/videos?page=1", last: "/users/90813794/videos?page=1"}
      // per_page: 25
      // total: 3
    
    }); // [end] client.request
  };


  componentDidMount() {

    console.log('- [VideosFeed] componentDidMount ' );
    this.fetchVideos(this.props);

  }

  /**
   * Fetch new videos if a different category is received
   * @param {*} newProps 
   */
  componentWillReceiveProps(newProps) {

    const { category } = newProps;

    if(category !== this.state.category) {

      console.log(`- [VideosFeed] componentWillReceiveProps - Fetching new videos filtered by ${category}`);
      this.fetchVideos(newProps);
    }
  }


  componentWillUnmount() {
    console.log('- [VideosFeed] componentWillUnmount ' );
    // this._isMounted = false;
    // OFF vimeo.request ???
  }


  render() {

    console.log('- [VideosFeed] render');

    const { data } = this.state;
  
    return (
      <DivRow>
        {
          data 
          ?
          data.map((video, index) => (
            <div className="col" key={video.uri}>
              <Video data={video} />
              {/* { console.log('*******video=', video) } */}
            </div>
          ))
          :
          <div className="spinner-frame">
            <p>En train de chercher des vidéos</p>
            <CircularProgress />
          </div>
        }
      </DivRow>
    );
  }
}

// VideosFeed.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default VideosFeed;
