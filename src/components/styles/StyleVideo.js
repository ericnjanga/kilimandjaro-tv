
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
  }

  time {
    position: absolute;
    z-index: 12;
    background: #999;
    right: 0;
    bottom: 0;
    font-size: 0.6rem;
    padding: 3px 10px;
    color: #000;
    font-weight: bold;
    /* border-radius: 5px; */
    border-top-left-radius: 5px;
  }

  .metadata-title {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 1rem;
    color: ${theme.color.primaryHover}
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
