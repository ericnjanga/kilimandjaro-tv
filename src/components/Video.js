import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ModalVideo from './ModalVideo';


const styles = theme => ({
  paper: {
    // height: 140,
    width: 260,
    // border:'10px solid blue',
  },
  img: {
    maxWidth: '100%',
  }
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

    const {
      // data:{category, id},
      data:{uri, pictures, metadata},
      classes,
    } = this.props;

    console.log('[render] - video');

    const { modal } = this.state; 
    const videoId = uri.split('/videos/')[1];
    const imgUrl = pictures.sizes[3].link;

    return(
      <React.Fragment>
        <Paper
          className={`${classes.paper} box-video`}
          onClick={this.toggleModal}
        >
          {/* <CardMedia
            className={`${classes.media}`}
            image={imgUrl}
            title={metadata.name}
          /> */}
          <img 
            src={imgUrl}
            alt={metadata.name}
            className={`${classes.img}`}
          />
        </Paper> 
        <ModalVideo
          active={modal.active}
          toggle={this.toggleModal}
          videoId={videoId}
        />
      </React.Fragment>
    );

  }
}


export default withStyles(styles)(Video);
