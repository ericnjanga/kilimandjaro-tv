import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ModalVideo from './ModalVideo';


const styles = theme => ({
  paper: {
    height: 140,
    width: 200,
    border:'10px solid blue',
  },
});


class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        active: false
      },
    };
  }


  toggleModal = () => {
    this.setState((prevState) => {
      // const { modal } = this.state;
      // modal.active = !prevState.modal.active;
      return { modal:{ active:!prevState.modal.active } };
    });
  }


  render() {

    console.log('[render] - video');
    const {
      data:{category, id},
      classes,
    } = this.props;
    const { modal } = this.state; 

    return(
      <React.Fragment>
        <Paper
          className={`${classes.paper} box-video`}
          onClick={this.toggleModal}
        >
          { category}
        </Paper> 
        <ModalVideo
          active={modal.active}
          toggle={this.toggleModal}
          videoId={id}
        />
      </React.Fragment>
    );

  }
}


export default withStyles(styles)(Video);
