import React from 'react';
// import { withStyles } from '@material-ui/core/styles';

import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
// import Paper from '@material-ui/core/Paper';
import ModalVideo from './ModalVideo';


const DivContainer = styled.div`
  border-radius: 5px;
  /* width: 260px; */
  /* width: 50%; */
  cursor: pointer;
 
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  overflow: hidden;

  > img {
    max-width: 100%;
    // border-ra
  }
`;

// const styles = theme => ({
//   paper: {
//     // height: 140,
//     width: 260,
//     // border:'10px solid blue',
//   },
//   img: {
//     maxWidth: '100%',
//   }
// });


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
        <DivContainer
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
            // className={`${classes.img}`}
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
