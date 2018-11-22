
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {};
style.DivApp = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100%;


  // Toggling "vertical nav" and "large logo" on viewport change
  // ------------------------
  .App-verticalNav {
    display: none;
  }
  .App-brand__large {
    display: flex!important;
  }
  @media (min-width: 900px) {
    .App-verticalNav {
      display: flex;
    }
    .App-brand__large {
      display: none!important;
    }
  }


  @media (max-width: 899px) {
    .maincontent-center {
      padding-top: 0;
      margin-top: 30px;
    }
  }


  @media (min-width: 900px) {
    .App-horizontalNav,
    .maincontent-center {
      margin: 0 auto;
      width: ${(theme.videoThumbnail.maxWidth * 4) + theme.videoThumbnail.padding}px;
    }
  }



`;
style.DivAppMainContent = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${theme.color.lightGray};


  .maincontent-center {
    overflow-y: scroll;
    padding: 15px;
  }
`;


export default style;
