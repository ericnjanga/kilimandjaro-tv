import React from 'react';
import VideoStyle from './styles/StyleVideo';
import ModalVideo from './ModalVideo';
import IconVideo from '@material-ui/icons/PlayCircleOutline';


const { 
  DivContainer,
} = VideoStyle;

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
    } = this.props;

    console.log('[render] - video');

    const { modal } = this.state; 
    const videoId = uri.split('/videos/')[1];
    const imgUrl = pictures.sizes[3].link;

    return(
      <React.Fragment>
        <DivContainer
          onClick={this.toggleModal}
        >
          <IconVideo className="icon" />
          <img 
            src={imgUrl}
            alt={metadata.name}
          />
        </DivContainer> 
        <ModalVideo
          active={modal.active}
          toggle={this.toggleModal}
          videoId={videoId}
        />
      </React.Fragment>
    );

  }
}


export default Video;
// export default withStyles(styles)(Video);
