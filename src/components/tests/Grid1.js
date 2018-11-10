import React from 'react';
// import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';

import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components

// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';

import GetVimeoData from './../../utilities/funcAsChild/getVimeoData';

import Video from './../Video'; 



const DivRow = styled.div`
  // border: 3px solid red;
  display: flex; 
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  .col {
    position: relative;
    margin-bottom: 15px;
    width: 100%;
    min-height: 1px;
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 15px;
    padding-left: 15px;
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
      padding-right: 15px;
      padding-left: 7.5px;
    }
    .col:nth-of-type(3n + 1) {
      // border: 5px solid purple;
      padding-left: 15px;
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
      padding-left: 15px;
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
      padding-right: 15px;
      padding-left: 7.5px;
    }
  }


  @media (min-width: 1200px) {
    .col {  
      flex: 0 0 250px;
      max-width: 250px; 
      padding-left: 15px!important;
      padding-right: 0!important;
    }
  }
`;

 

const Grid = () => {

  const user_id = '90813794';

  return (
    <DivRow>
      <GetVimeoData url={`/users/${user_id}/videos`}>
        {
          (videoData) => {
            // console.log('*******videoData=', videoData)
            return (
              videoData.map((video, index) => (
                <div className="col" key={video.uri}>
                  <Video data={video} />
                  {/* { console.log('*******video=', video) } */}
                </div>
              ))
            );
          }
        }
      </GetVimeoData>
    </DivRow>
  );
}

// Grid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Grid;
