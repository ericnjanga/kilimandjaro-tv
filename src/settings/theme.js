

/**
 * App theme: https://slackthemes.net/#/folio_purple
 * #38307F,#737272,#DA6A2D,#FFFFFF,#737272,#FFFFFF,#DA6A2D,#DA6A2D
 * 
 * 
 * App Layout: https://dribbble.com/shots/1732793-Task-App-Dashboard-UI
 */
const theme1 = {  
  color: {
    primary: '#DA6A2D',
    primaryHover: '#fff',
    secondary: '#38307F',
    secondaryLight: 'rgb(66,133,244)',
    lightGray: '#d6d6d6',
    lightGrayLow: '#999',
    gray: '#666',
    darkGray: '#333',
  },
  transition: {
    basic: 'all 0.2s ease-in-out',
  },
  videoThumbnail: {
    maxWidth: 250,
    padding: 15,
  },
  vNav: {
    width: 170,
  },
  hNav: {
    height: 60,
  },
  breakpoints: {},
};

// transparent back/white
theme1.gradient1 = `
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+49,000000+49,333333+90,333333+100&0+0,0.65+100 */
  background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.32) 49%, rgba(51,51,51,0.59) 90%, rgba(51,51,51,0.65) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.32) 49%,rgba(51,51,51,0.59) 90%,rgba(51,51,51,0.65) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 49%,rgba(51,51,51,0.8) 90%,rgba(51,51,51,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6333333',GradientType=0 ); /* IE6-9 */
`;

theme1.gradient2 = `
  background: -moz-linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 0%, rgba(255,255,255,0) 100%); /* ff3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255,255,255,0)), color-stop(100%, rgba(51,51,51,1)), color-stop(100%, rgba(51,51,51,1))); /* safari4+,chrome */
  background: -webkit-linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 0%, rgba(255,255,255,0) 100%); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 0%, rgba(255,255,255,0) 100%); /* opera 11.10+ */
  background: -ms-linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 0%, rgba(255,255,255,0) 100%); /* ie10+ */
  background: linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(51,51,51,1) 0%, rgba(255,255,255,0) 100%); /* w3c */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#333333',GradientType=0 ); /* ie6-9 */
`;

// 4 video thumbnails put together
theme1.vid4cols = (theme1.videoThumbnail.maxWidth * 4);

// left sidebar nav + 4 video thumbnails put together
theme1.breakpoints.leftNavMainContent = theme1.vNav.width + theme1.vid4cols +  + theme1.videoThumbnail.padding;


const hoverEffect1_iconSize = 32;
const exportTheme = {
  ...theme1,
  hoverEffect1: `
  cursor: pointer; 
  overflow: hidden;
  .icon {
    position: absolute;
    bottom: -${hoverEffect1_iconSize + 10}px;
    font-size: ${hoverEffect1_iconSize}px;
    left: calc(50% - ${hoverEffect1_iconSize/2}px);
    color: ${theme1.color.secondary};
    opacity: 0;
    transition: ${theme1.transition.basic};
  }
  &:hover {
    &:before {
      opacity: .4;
    }
    .icon {
      opacity: 1;
      bottom: calc(50% - ${hoverEffect1_iconSize/2}px);
    }
  }
  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
    opacity: 0;
    transition: ${theme1.transition.basic};
  }
  `,
};





export default exportTheme;
