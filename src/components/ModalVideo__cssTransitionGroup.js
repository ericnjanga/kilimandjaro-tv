import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconClose from '@material-ui/icons/Close';
import { CSSTransitionGroup } from 'react-transition-group';



const styles = theme => ({
  paper: {
    height: 140,
    width: 200,
    border:'10px solid blue',
  },
});


class ModalVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }



  render() {
    const {
      active,
      toggle,
      data,
      classes,
    } = this.props;

    // if(!active) {
    //   return false;
    // }
    
    console.log('[render] - Modalvideo');

    return(

      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {
          active && 
          <div className="modal-overlay" key={1}>
            <IconClose
              className="modal-close"
              onClick={toggle}
            />
            <div id="embed" className="modal-container"></div>

      
      <Paper
        className={`${classes.paper} modalvideo`}
      >
        {/* { category} */}
      </Paper> 
          </div>
        }
        
      </CSSTransitionGroup>
    );

  }// [end] render


}

export default withStyles(styles)(ModalVideo);
