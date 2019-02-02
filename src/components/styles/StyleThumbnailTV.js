
import theme from './../../settings/theme'
import StyleThumbnail from './StyleThumbnail'
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components

const style = {
  ThumbailTVContainer: styled.div `

  margin-bottom: 30px;
  time,
  .thumbnail-title,
  .img-thumbnail {
    transition: all 0.4s ease-out;
  }

  a {
    position: relative;
    display: block;
  }

  .icon {
    display: none;
  }

  time {
    ${StyleThumbnail.time}
  }

  &:hover {
    cursor: pointer;
    .thumbnail-title {
      color: ${theme.color.primary};
    }
    time,
    .img-thumbnail {
      background-color: ${theme.color.primary};
      border-color: ${theme.color.primary};
    }
  }

  .thumbnail-title {
    margin-top: 10px;
    margin-bottom: 0;
    ${StyleThumbnail.thumbnailTitle}
    color: ${StyleThumbnail.colorOff};
  }
  .img-thumbnail {
    margin-top: 10px;
    ${StyleThumbnail.imgThumbnail}
  }
  `,
};

export default style;
