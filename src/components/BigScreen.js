import React from 'react'
import MoviesStyle from './styles/StyleMoviesPage'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/PlayCircleOutline'

import Preloader from './../components/Preloader'
import { FetchVideo } from './../containers/VimeoComponent'

const {
  BigScreenContainer,
} = MoviesStyle

const BigScreen = ({
  videoId,
  url,
  video
}) => {

  /**
   * I'M FORCED TO HARDCODE THINGS HERE BECAUSE VIMEO API DOESN'T PROVIDE VIDEO FILE MP4 DATA
   */

  // console.log(video);
  const videoUrl = `/tv/313790168`
  const videoName = `KMA 2018 FINAL HIGHLIGHTS`
  const mp4FileLink = 'https://player.vimeo.com/external/313790168.hd.mp4?s=12397596c6bb18023c1ef211963854c73d9529c4&profile_id=175';
  
  return (
    <BigScreenContainer className="bigScreen">

      <React.Fragment>
        <article className="bigScreen-article">
          <BigScreenTitle>
            { videoName }
          </BigScreenTitle>
          
          <NavLink
            to={videoUrl}
            className="bigScreen-cta"
          >
            Watch Now <MenuIcon className="bigScreen-cta-icon" />
          </NavLink>
        </article>
        <video autoPlay loop className="video-background" muted playsInline>
          <source src={`${mp4FileLink}&oauth2_token_id=`} type="video/mp4" />
        </video>
      </React.Fragment>

      {/* <FetchVideo
        id={videoId}
      >
        {
          (video) => {
            console.log('>>>> video object = ', video)
          }
        }
      </FetchVideo>


      {
        !video ?
        <Preloader
          darkTone
          text={'Loading The VIdeo'}
        />
        :
      } */}
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
