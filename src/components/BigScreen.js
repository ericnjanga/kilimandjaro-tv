import React from 'react'
import MoviesStyle from './styles/StyleMoviesPage'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const {
  BigScreenContainer,
} = MoviesStyle

const BigScreen = () => {
  return (
    <BigScreenContainer>
      <article className="bigscreen-article">
        <h3 className="bigscreen-title">Big Title here</h3>


        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className="btn-menu"
          // onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </article>
      <video autoPlay loop className="video-background" muted playsInline>
        <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" />
        {/* <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4"> */}
      </video>
      {/* <video autoPlay loop id="video-background" muted playsInline>
        <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4">
      </video> */}
    </BigScreenContainer>
  );
}
 
export default BigScreen
