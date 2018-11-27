
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {};
style.Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  padding: 0 15px;
  height: ${theme.hNav.height}px;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent; //#666;
    opacity: 0.5;
  }

  .App-brand__large {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-right: auto;
    color: ${theme.color.secondary};
    button {
      padding-left: 0;
      border: 0;
      background: transparent;
    }
  }

  .announces {
    flex: 1;
    overflow: hidden;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        margin-right: 50px;
        font-size: 0.8rem;
        animation: marquee 15s linear infinite;
      }
    }
  }

  .App-brand__large, .announces, a, button {
    position: relative;
    z-index: 1;
  }


  @media (max-width: 899px) {
    .announces {
      position: absolute;
      top: 55px;
      left: 0;
      margin: 0 15px;
    }
  }

  @keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  }


  .btnIcon {
    margin-left: 8px!important;
  }
`;

export default style;
