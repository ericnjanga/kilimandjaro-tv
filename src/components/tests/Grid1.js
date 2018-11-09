import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // height: 140,
    width: 260,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstRenderReady: false,
      adStep: 3,
      spacing: '16',
      // arrayVideos = [],
      // arrayAds = [],
    };
    this.user_id = '90813794';
  }

  /**
   * Merging ads with videos (each ad can be spaced out by "step" videos) 
   */
  componentDidMount() {

    // // List of videos
    // const arrayVideos = [
    //   { key:0, category:'video', id:'294458799' },
    //   { key:1, category:'video', id:'76979871' }
    // ];  
    // for(var i=2 ; i < 23 ; i++){
    //   arrayVideos.push({ key:i, category:'video', id:'294458799' });
    // }

    // //  List of ads
    // const arrayAds = [];  
    // for(var i=0 ; i < 4 ; i++){
    //   arrayAds.push({ key:`${i}x-9`, category:'ad' });
    // }
    // let counterAds = 0;   // allows to keep track of which ad is added
    // let counterJump = 1;
    // const step = {nb:this.state.adStep, extended:false};       //insert advertising every "step" videos
    
    // // Merging ads with videos (each ad can be spaced out by "step" videos) 
    // arrayVideos.forEach((video, index) => {
    //   if ( (counterJump===step.nb) && (counterAds < arrayAds.length)  ) { 
    //     arrayVideos.splice((index + 1), 0, arrayAds[counterAds] );
    //     counterAds += 1;
    //     counterJump = 0;
    //     if(!step.extended) {
    //       step.nb += 1;
    //       step.extended = true;
    //     }
    //   }
    //   counterJump += 1;
    // });

    // this.setState({ arrayVideos, firstRenderReady:true });
  }

 

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;


    return (
      <DivRow>
        <GetVimeoData url={`/users/${this.user_id}/videos`}>
          {
            (videoData) => {
              console.log('*******videoData=', videoData)
              return (
                videoData.map((video, index) => (
                  <div className="col">
                    {/* <Grid key={video.uri} item className="video"> */}
                      <Video data={video} />
                      { console.log('*******video=', video) }
                    {/* </Grid> */}
                  </div>
                ))
              );
            }
          }
        </GetVimeoData>








        {/* <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="Spacing"
                  value={spacing}
                  onChange={this.handleChange('spacing')}
                  row
                >
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="16" control={<Radio />} label="16" />
                  <FormControlLabel value="24" control={<Radio />} label="24" />
                  <FormControlLabel value="32" control={<Radio />} label="32" />
                  <FormControlLabel value="40" control={<Radio />} label="40" />
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}


      </DivRow>


      // <Grid container className={classes.root} spacing={16}>
      //   <Grid item xs={12}>
      //     <Grid container className={classes.demo} justify="flex-start" spacing={Number(spacing)}>
      //       <GetVimeoData url={`/users/${this.user_id}/videos`}>
      //         {
      //           (videoData) => {
      //             console.log('*******videoData=', videoData)
      //             return (
      //               videoData.map((video, index) => (
      //                 <Grid key={video.uri} item className="video">
      //                   <Video data={video} />
      //                   { console.log('*******video=', video) }
      //                 </Grid>
      //               ))
      //             );
      //           }
      //         }
      //       </GetVimeoData>
      //     </Grid>
      //   </Grid> 
      // </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
