import React from 'react'
import MoviesStyle from './styles/StyleMoviesPage'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/PlayCircleOutline'

import Preloader from './../components/Preloader'

const {
  BigScreenContainer,
} = MoviesStyle

const BigScreen = ({
  url,
  video
}) => {

  console.log(video);
  
  return (
    <BigScreenContainer className="bigScreen">
      {
        !video ?
        <Preloader
          darkTone
          text={'Chargement des vidéos'}
        />
        :
        <React.Fragment>
          <article className="bigScreen-article">
            <BigScreenTitle>
              { video.name }
            </BigScreenTitle>

            <NavLink
              to={url}
            >
              Visionnez <MenuIcon className="bigScreen-cta-icon" />
            </NavLink>
            {/* <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className="bigScreen-cta"
              // onClick={toggleDrawer}
            >
              Visionnez <MenuIcon className="bigScreen-cta-icon" />
            </IconButton> */}
          </article>
          <video autoPlay loop className="video-background" muted playsInline>

          

                        {/* "https://player.vimeo.com/video/315408039?badge=0&autopause=0&player_id=0&app_id=137077" */}
            {/* <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" /> */}
            {/* <source src="https://player.vimeo.com/external/315408039.hd.mp4?s=d5a3d5867ed859745d13b48bd94a505f01df3824&profile_id=175" type="video/mp4" /> */}
            <source src="https://player.vimeo.com/external/315408039.sd.mp4?s=55b02e335998959ec420b1fa3ddb631cf8a76700&profile_id=165&oauth2_token_id=" type="video/mp4" />
          </video>
        </React.Fragment>
      }
    </BigScreenContainer>
  );
}

const BigScreenTitle = ({ children }) => {
  const limit = 30
  const textEport = children.length > limit ? children.substr(0, limit-4) + ' ...' : children
  return (
    <h3 className="bigScreen-title">{ textEport }</h3>
  )
}
 

 
export default BigScreen
