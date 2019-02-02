
import theme from './../../settings/theme';
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components

const style = {
  ThumbailTVContainer: styled.div `

  margin-bottom: 30px;
  .thumbnail-title,
  .img-thumbnail {
    transition: all 0.4s ease-out;
  }

  a {
    display: block;
  }

  &:hover {
    cursor: pointer;
    .thumbnail-title {
      color: ${theme.color.primary};
    }
    .img-thumbnail {
      background-color: ${theme.color.primary};
      border: 1px solid ${theme.color.primary};
    }
  }

  .thumbnail-title {
    margin-top: 10px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 1rem;
    color: ${theme.color.primaryHover}
  }
  `,
};

export default style;
