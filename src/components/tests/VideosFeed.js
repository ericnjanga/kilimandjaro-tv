import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Vimeo from 'vimeo';
// import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';

import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

import Video from './../Video'; 

// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';

// import GetVimeoData from './../../utilities/funcAsChild/getVimeoData';



const DivRow = styled.div`
  display: flex; 
  flex-wrap: wrap;
  margin-right: -${theme.videoThumbnail.padding}px;
  margin-left: -${theme.videoThumbnail.padding}px;

  .col {
    position: relative;
    margin-bottom: ${theme.videoThumbnail.padding}px;
    width: 100%;
    min-height: 1px;
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: ${theme.videoThumbnail.padding}px;
    padding-left: ${theme.videoThumbnail.padding}px;
  } 
  .col:nth-of-type(2n) {
    padding-left: 7.5px;
  }
  .col:nth-of-type(2n + 1) {
    padding-right: 7.5px;
  }


  @media (min-width: 600px) {
    .col {  
      flex: 0 0 33.33333%;
      max-width: 33.33333%; 
    }
    .col:nth-of-type(3n) {
      // border: 5px solid green;
      padding-right: ${theme.videoThumbnail.padding}px;
      padding-left: 7.5px;
    }
    .col:nth-of-type(3n + 1) {
      // border: 5px solid purple;
      padding-left: ${theme.videoThumbnail.padding}px;
      padding-right: 7.5px;
    }
    .col:nth-of-type(3n + 2) {
      // border: 5px dashed purple;
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
  }


  @media (min-width: 900px) {
    .col {  
      flex: 0 0 25%;
      max-width: 25%; 
    }
    .col:nth-of-type(4n + 1) {
      // border: 5px solid purple;
      padding-left: ${theme.videoThumbnail.padding}px;
      padding-right: 7.5px;
    }
    .col:nth-of-type(4n + 2) {
      // border: 5px dashed purple;
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
    .col:nth-of-type(4n + 3) {
      // border: 5px dashed blue;
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
    .col:nth-of-type(4n) {
      // border: 5px solid green;
      padding-right: ${theme.videoThumbnail.padding}px;
      padding-left: 7.5px;
    }
  }


  @media (min-width: 1200px) {
    .col {  
      flex: 0 0 ${theme.videoThumbnail.maxWidth}px;
      max-width: ${theme.videoThumbnail.maxWidth}px; 
      padding-left: ${theme.videoThumbnail.padding}px!important;
      padding-right: 0!important;
    }
  }

  .spinner-frame {
    flex-direction: column;
    display: flex;    
    min-height: 200px;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

 

class VideosFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.user_id = '90813794';
    this.uri = `/users/${this.user_id}/videos`;
    this.client_id = '042ddc682208ca1874ccb4f8831a233de87f6a30';
    this.client_secret = 'zbNBFvoWuLupNmfAcn47zzKj//rWnzzxPtBwU+NCGkVfsssI7yl7iCbYxcreHB44AvmvGaDSft88jUctA+FsT0Sjw9TbasCwpNL0LHmlQyiiuwojsj/ZVonYwcM2Exnj';
    this.access_token = '7830efffa2f9efa32b104041452c552b';
    this.client = new Vimeo.Vimeo(this.client_id, this.client_secret, this.access_token);
  }


  componentDidMount() {

    this._isMounted = true;

    this.client.request({
      method: 'GET',
      path: this.uri,
    }, (error, body, status_code, headers) => {
      if (error) {
        console.log(error);
      }

      if (this._isMounted && body) {
        const { category } = this.props;
        let data = '';
        if(category){
          data = body.data.filter(data => data.tags[0] && data.tags[0].name===category)
        } else {
          data = body.data;
        }
        
        this.setState({ data });
      }
      
      // Body contains:
      // data: (3) [{…}, {…}, {…}]
      // page: 1
      // paging: {next: null, previous: null, first: "/users/90813794/videos?page=1", last: "/users/90813794/videos?page=1"}
      // per_page: 25
      // total: 3
    
    }); // [end] client.request

  }


  componentWillUnmount() {

    this._isMounted = false;
    // OFF vimeo.request ???
  }


  render() {

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
