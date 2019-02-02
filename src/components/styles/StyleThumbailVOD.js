
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import StyleThumbnail from './StyleThumbnail'
import theme from '../../settings/theme';

const style = {};
style.ThumbailVODContainer = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: ${StyleThumbnail.colorOff}

  time {
    ${StyleThumbnail.time}
  }
  .img-thumbnail {
    ${StyleThumbnail.imgThumbnail}
  }

  .thumbnail-title {
    padding-left: 5px;
    // margin-bottom: 0;
    ${StyleThumbnail.thumbnailTitle}
    // color: ${StyleThumbnail.colorOff};
  }

  .btn-cta {
    margin: 0 0 5px 5px;
  }

  // border: 10px solid lime;

  // .pricing-rent {
  //   margin: 0;
  //   padding: 0;
  //   li {
  //     display: inline-block;
  //     font-size: 0.8rem;
  //     color: #999;
  //     margin-right: 10px;
  //     color: #3dacc7;
  //     font-weight: bold;
  //     &.price-ca {
  //       color: #d06896;
  //     }
  //     &.price-us {
  //       color: #3dacc7;
  //     }
  //     &.price-eu {
  //       color: #1e8ec7;
  //     }
  //   } 
  // }



  // .metadata {
  //   margin-top: 5px;
  //   font-size: 0.8rem;

  //   p {
  //     margin-bottom: 0;
  //     color: ${theme.color.primaryHover}
  //   }
  // }

  // time {
  //   position: absolute;
  //   z-index: 12;
  //   background: #999;
  //   right: 0;
  //   bottom: 0;
  //   font-size: 0.6rem;
  //   padding: 3px 10px;
  //   color: #000;
  //   font-weight: bold;
  //   /* border-radius: 5px; */
  //   border-top-left-radius: 5px;
  // }



  .footer-cta {
    margin-top: 10px;
    .btn-cta {
      &:hover {
        text-decoration: none;
        color: #fff;
        background: ${theme.color.tertiary};
      }
    }
  }

  

`;

export default style;
