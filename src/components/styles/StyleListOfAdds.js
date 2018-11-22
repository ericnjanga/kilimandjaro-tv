
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {
  DivContainer: styled.ul`
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 20px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }

    .add {
      position: relative;
      img {
        max-width: 100%;
      }
      ${theme.hoverEffect1}
    }
  `,
};

export default style;
