import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import VideosFeedStyle from './../styles/StyleVideosFeed';
import Vimeo from 'vimeo';
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
    };

    this.user_id = '90813794';
    this.uri = `/users/${this.user_id}/videos`;
    this.client_id = '042ddc682208ca1874ccb4f8831a233de87f6a30';
    this.client_secret = 'zbNBFvoWuLupNmfAcn47zzKj//rWnzzxPtBwU+NCGkVfsssI7yl7iCbYxcreHB44AvmvGaDSft88jUctA+FsT0Sjw9TbasCwpNL0LHmlQyiiuwojsj/ZVonYwcM2Exnj';
    this.access_token = '7830efffa2f9efa32b104041452c552b';
    this.client = new Vimeo.Vimeo(this.client_id, this.client_secret, this.access_token);
  }

  /**
   * Fetch videos from VIMEO:
   * - If a category is provided, filter result, otherwise return result
   * - save result into state.data
   */
  fetchVideos = ({ category }) => {

    console.log('- -------- fetchData ---------: ', category);

    this.client.request({
      method: 'GET',
      path: this.uri,
    }, (error, body, status_code, headers) => {
      if (error) {
        console.log(error);
      }

      if (/* this._isMounted && */ body) {
        // const { category } = this.props;

        console.log('- [VideosFeed] category: ', category);

        let data = '';
        if(category){
          data = body.data.filter(data => data.tags[0] && data.tags[0].name===category)
        } else {
          data = body.data;
        }
        
        console.log('- [VideosFeed] data: ', data);
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

    // this._isMounted = true;
    this.fetchVideos(this.props);

  }


  componentWillReceiveProps(newProps) {

    const { category } = newProps;
    console.log('- [VideosFeed] componentWillReceiveProps: ', newProps);

    if(category !== this.state.category) {
      console.log('- [VideosFeed] Fetching new videos: ', category);
      this.fetchVideos(this.props);
    }
  }


  componentWillUnmount() {
    console.log('- [VideosFeed] componentWillUnmount ' );

    // this._isMounted = false;
    // OFF vimeo.request ???
  }


  render() {

    console.log('- [VideosFeed] render' );

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
