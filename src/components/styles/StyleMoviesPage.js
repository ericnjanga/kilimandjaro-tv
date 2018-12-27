
import styled from 'styled-components' //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme'

const style = {
  MoviesContainer: styled.div`
    background: ${theme.color.darkGray};

    .spinner-frame {
      color: ${theme.color.lightGray};
    }

    .title {
      color: #ccc;
    }
  `,
}


export default style
