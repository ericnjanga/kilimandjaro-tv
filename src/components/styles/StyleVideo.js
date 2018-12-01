
import theme from './../../settings/theme';
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components

const style = {
  DivGlobalContainer: styled.div `

  .metadata {
    margin-top: 5px;
    font-size: 0.8rem;

    p {
      margin-bottom: 0;
      color: ${theme.color.primaryHover}
    }
    time {
      color: ${theme.color.lightGrayLow}
    }
  }
  `,
  DivVidObjectContainer: styled.div`
    position: relative;
    border-radius: 5px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); 

    > img {
      max-width: 100%;
    }

    ${theme.hoverEffect1}
  `,
};

export default style;
