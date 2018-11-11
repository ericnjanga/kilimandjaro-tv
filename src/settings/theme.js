

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
    lightGray: '#d6d6d6',
    gray: '#666',
  },
  transition: {
    basic: 'all 0.2s ease-in-out',
  },
};


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
