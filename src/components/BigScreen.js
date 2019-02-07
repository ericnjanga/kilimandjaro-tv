import React from 'react'
import MoviesStyle from './styles/StyleMoviesPage'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/PlayCircleOutline'

const {
  BigScreenContainer,
} = MoviesStyle

const BigScreen = () => {
  return (
    <BigScreenContainer>
      <article className="bigscreen-article">
        <BigScreenTitle>EDDY KENZO AND THE GHETTO KIDS AT AFROFEST 2018</BigScreenTitle>

        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className="bigscreen-cta"
          // onClick={toggleDrawer}
        >
          Visionnez <MenuIcon className="bigscreen-cta-icon" />
        </IconButton>
      </article>
      <video autoPlay loop className="video-background" muted playsInline>
        <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" />
      </video>
    </BigScreenContainer>
  );
}

const BigScreenTitle = ({ children }) => {
  const limit = 30
  const textEport = children.length > limit ? children.substr(0, limit-4) + ' ...' : children
  return (
    <h3 className="bigscreen-title">{ textEport }</h3>
  )
}
 

 
export default BigScreen
