
import styled from 'styled-components' //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme'

const style = {
  MoviesContainer: styled.div`
    background: ${theme.color.pageBackgroundColor};

    .title {
      color: #999;
    }
    p {
      color: #ccc;
    }

    .player-container {
      background: #000;
      margin-bottom: 30px;
    }
  `,
  BigScreenContainer: styled.section`
    position: relative;
    height: 500px;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 1;
    }

    .bigscreen-article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100%;
      height: 100%;
      color: #fff;
      z-index: 10;
    }

    /* The only rule that matters */
    .video-background {
    /*  making the video fullscreen  */
      position: fixed;
      right: 0; 
      bottom: 0;
      min-width: 100%; 
      min-height: 100%;
      width: auto; 
      height: auto;
      z-index: -100;
    }
  `
}


export default style
