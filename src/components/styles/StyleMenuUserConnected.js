
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {
  DivContainer: styled.nav`
    position: relative;
    z-index: 9;

    .icon {
      color: ${theme.color.gray}!important;
    }

    .menu-item {
      padding: 0;
      height: initial;
    }
    .menu-item a,
    .menu-item-block {
      display: block;
      width: 100%;
      padding: 11px 16px;
    }
  `,
};

export default style;
