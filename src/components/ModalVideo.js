import React from 'react'; 
import Dialog from '@material-ui/core/Dialog'; 
import DialogContent from '@material-ui/core/DialogContent';  
import Slide from '@material-ui/core/Slide';
import VimeoPlayer from '@vimeo/player';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ModalVideo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.vimeoIframe = React.createRef();
  }


  /**
   * Destroy player and close modal
   * (Pause first, then destroy)
   */
  destroyPlayer = () => {

    var player = new VimeoPlayer(this.vimeoIframe.current);
 
    player.pause().then(function() { // Pause player
  
      // player.destroy().then(function() { // Destroy it 
      //   // Player destroyed
      // }).catch(function(error) {
      //   console.error('Something happened, we couldn\'t destroy the player');
      // });
    }).catch(function(error) {
      console.error('Something happened, we couldn\'t pause the player');
    });

    // Close modal
    this.props.toggle();

  }


  render() {

    const { active, videoId } = this.props;

    return ( 
      <Dialog
        open={active}
        TransitionComponent={Transition}
        keepMounted
        onClick={this.destroyPlayer}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{margin:0}}
      >
        <DialogContent style={{ width:'600px' }}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            className="kilimansjaro-iframe"
            width="100%"
            height="320"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; encrypted-media"
            ref={this.vimeoIframe}
          />
        </DialogContent>
      </Dialog> 
    );
  }
}

export default ModalVideo;