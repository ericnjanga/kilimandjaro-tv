import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import Video from './../Video';
import Ad from './../Ad';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 200,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {

  state = {
    firstRenderReady: false,
    adStep: 3,
    spacing: '16',
    // arrayVideos = [],
    // arrayAds = [],
  };

  /**
   * Merging ads with videos (each ad can be spaced out by "step" videos) 
   */
  componentDidMount() {

    // List of videos
    const arrayVideos = [];  
    for(var i=0 ; i < 25 ; i++){
      arrayVideos.push({ key:i, category:'video' });
    }

    //  List of ads
    const arrayAds = [];  
    for(var i=0 ; i < 4 ; i++){
      arrayAds.push({ key:`${i}x-9`, category:'ad' });
    }
    let counterAds = 0;   // allows to keep track of which ad is added
    let counterJump = 1;
    const step = {nb:this.state.adStep, extended:false};       //insert advertising every "step" videos
    
    // Merging ads with videos (each ad can be spaced out by "step" videos) 
    arrayVideos.forEach((video, index) => {
      if ( (counterJump===step.nb) && (counterAds < arrayAds.length)  ) { 
        arrayVideos.splice((index + 1), 0, arrayAds[counterAds] );
        counterAds += 1;
        counterJump = 0;
        if(!step.extended) {
          step.nb += 1;
          step.extended = true;
        }
      }
      counterJump += 1;
    });

    this.setState({ arrayVideos, firstRenderReady:true });
  }

 

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };


  render() {
    const { classes } = this.props;
    const { spacing, arrayVideos, firstRenderReady } = this.state;

    if(!firstRenderReady) {
      return false;
    }

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="flex-start" spacing={Number(spacing)}>
            {arrayVideos.map((video, index) => (
              <Grid key={video.key} item className="video">
                {
                  video.category==='video' && <Video data={video} />
                }
                {
                  video.category==='ad' && <Ad data={video} />
                }
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
