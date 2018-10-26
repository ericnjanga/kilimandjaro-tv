import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  paper: {
    height: 140,
    width: 200,
    border:'10px solid blue'
  },
});


const Video = ({
  data,
  classes,
}) => {
  
  console.log('[render] - video');
  const { category } = data; 

  return(
    <Paper
      className={classes.paper}
    >
      { category}
    </Paper> 
  );
}

export default withStyles(styles)(Video);
