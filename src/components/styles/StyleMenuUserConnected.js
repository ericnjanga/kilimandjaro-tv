
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {
  Div: styled.nav`
    position: relative;
    z-index: 9;

    .icon {
      color: ${theme.color.gray}!important;
    }
  `,
};

export default style;
