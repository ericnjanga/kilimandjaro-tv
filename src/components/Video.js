import React from 'react';
import VideoStyle from './styles/StyleVideo';
import ModalVideo from './ModalVideo';
import IconVideo from '@material-ui/icons/PlayCircleOutline';


const { 
  DivGlobalContainer,
  DivVidObjectContainer,
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
      data:{uri, pictures, metadata, name, duration},
    } = this.props;

    console.log('[render] - video', this.props.data);

    const { modal } = this.state; 
    const videoId = uri.split('/videos/')[1];
    const imgUrl = pictures.sizes[3].link;

    return(
      <DivGlobalContainer>
        <DivVidObjectContainer
          onClick={this.toggleModal}
        >
          <IconVideo className="icon" />
          <img 
            src={imgUrl}
            alt={metadata.name}
          />
        </DivVidObjectContainer>

        <section className="metadata">
          <p>{name}</p>
          <Duration />
        </section>

        <ModalVideo
          active={modal.active}
          toggle={this.toggleModal}
          videoId={videoId}
        />
      </DivGlobalContainer>
    );

  }
}


/**
 * Convert milliseconds into HHh MMm SSs format
 */
const Duration = ({ duration }) => {
  // Duration calculations will happen here
  return (
    <time datetime="3m 30s">3:30 min</time>
  );
}


export default Video;
// export default withStyles(styles)(Video);
