/**
 * - Search in firebase database for data located at the provided @endpoint
 * - Conduct additional filtering on the resulting data if a @filter object is provided
 * 
 * - @endpoint
 * - @filter
 * - @filterType (Used to determine if we return result not containing the filter)
 * -------------------------------------------------------------
 */


/**
 * App info: https://developer.vimeo.com/apps/137077#personal_access_tokens
 * Fetch videos: https://developer.vimeo.com/api/reference/videos#check_if_user_owns_video
 */

import React from 'react';
import PropTypes from 'prop-types';
import Vimeo from 'vimeo';


class GetVimeoData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.client_id = '042ddc682208ca1874ccb4f8831a233de87f6a30';
    this.client_secret = 'zbNBFvoWuLupNmfAcn47zzKj//rWnzzxPtBwU+NCGkVfsssI7yl7iCbYxcreHB44AvmvGaDSft88jUctA+FsT0Sjw9TbasCwpNL0LHmlQyiiuwojsj/ZVonYwcM2Exnj';
    this.access_token = '7830efffa2f9efa32b104041452c552b';
    this.client = new Vimeo.Vimeo(this.client_id, this.client_secret, this.access_token);
  }


  componentDidMount() {

    this._isMounted = true;

    this.client.request({
      method: 'GET',
      path: this.props.url,
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

    if (!this.state.data) {
      return false;
    }

    // Undefined data will be handled outside
    return (
      <React.Fragment>
        { this.props.children(this.state.data) }
      </React.Fragment>
    );
  }
}


// Props validation
GetVimeoData.propTypes = {
  filter: PropTypes.shape({}),
  filterType: PropTypes.string,
};

GetVimeoData.defaultProps = {
  filter: null,
  filterType: null,
};


export default GetVimeoData;
