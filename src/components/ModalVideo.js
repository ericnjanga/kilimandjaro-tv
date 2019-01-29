import React from 'react';
import VimeoPlayer from '@vimeo/player';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IframeResponsiveStyle from './styles/StyleIframeResponsive'
import ModalVideoStyle from './styles/StyleModalVideo'

class ModalVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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

    const { 
      toggle,
      active,
      videoId,
      title
    } = this.props
    const {
      Iframe,
    } = IframeResponsiveStyle
    const {
      ModalContainer,
    } = ModalVideoStyle


    

    return (
      <div>
        <Modal isOpen={active} toggle={toggle} className={this.props.className}>
          <ModalContainer>
            <ModalHeader toggle={toggle}>
              {title}
            </ModalHeader>
            <ModalBody>
              <Iframe>
                <iframe
                  src={`https://player.vimeo.com/video/${videoId}`}
                  className={`kilimansjaro-iframe classes.iFrame`}
                  width="100%"
                  height="320"
                  frameBorder="0"
                  allowFullScreen="true"
                  allow="autoplay; encrypted-media"
                  ref={this.vimeoIframe}
                />
              </Iframe>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Voir le film</Button>{' '}
              {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
            </ModalFooter>
          </ModalContainer>
        </Modal>
      </div>
    );
  }
}

export default ModalVideo;