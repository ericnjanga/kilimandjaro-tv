
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {};
style.DivApp = styled.div`

  // Toggling "vertical nav" and "large logo" on viewport change
  // ------------------------
  .App-verticalNav {
    display: none;
    z-index: 10;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  .App-brand__large {
    display: flex!important;
    padding: 10px;
  }
  @media (min-width: ${theme.breakpoints.largeScreen}px) {
    .App-verticalNav {
      display: flex;
    }
    .App-brand__large {
      display: none!important;
    }
  }


  @media (max-width: 1182px) {
    .maincontent-center.padding {
      padding: 0 20px;
    }
  }


  @media (min-width: 1182px) {
    .App-horizontalNav .hNav__frame {
      position: relative;
      right: -15px;
    }
  }

  
  @media (min-width: ${theme.breakpoints.leftNavMainContent}px) {
    .App-horizontalNav .hNav__frame,
    .maincontent-center {
      margin: 0 auto;
      width: ${theme.vid4cols}px;
    }
  }



`;
style.DivAppMainContent = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default style;
