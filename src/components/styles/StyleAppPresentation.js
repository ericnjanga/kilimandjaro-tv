
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {};
style.DivApp = styled.div`

  // Toggling "vertical nav" and "large logo" on viewport change
  // ------------------------
  .App-verticalNav {
    display: none;
    // position: fixed;
    z-index: 10;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
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
    }
  }

  
  @media (min-width: ${theme.breakpoints.leftNavMainContent}px) {
    .App-horizontalNav,
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
  background: ${theme.color.darkGray};

  @media (min-width: 900px) {
    /* Make room for sidebar nav */
    margin-left: auto;
    width: calc(100% - ${theme.vNav.width}px);
  }


  .maincontent-center {
    margin-top: 30px;
    padding: 15px;
  }
`;

export default style;
