
import styled from 'styled-components' //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme'

const style = {
  MoviesContainer: styled.div`
    background: ${theme.color.darkGray};

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
}


export default style
