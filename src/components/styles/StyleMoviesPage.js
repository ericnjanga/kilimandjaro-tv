
import styled from 'styled-components' //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme'

const style = {
  MoviesContainer: styled.div`
    background: ${theme.color.darkGray};

    .spinner-frame {
      color: ${theme.color.lightGray};
    }

    .title {
      color: #999;
    }
    p {
      color: #ccc;
    }

    .iframe-container {
      margin-bottom: 20px;
      position: relative;
      overflow: hidden;
      padding-top: 56.25%;
      iframe {
        position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
      }
    }
  `,
}


export default style
