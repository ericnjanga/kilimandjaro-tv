
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {};
style.Container = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 9;
  background: transparent;
  height: ${theme.hNav.height}px;

  // nav.hNav__frame {
  //   display: none;
  // }

  nav.hNav__frame {
    display: flex;
    align-items: center;
  }

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
    button {
      position: relative;
      top: 1px;
      padding-left: 0;
      border: 0;
      background: transparent;
      color: #666;
    }
    a {
      color: #fff;
      &:hover {
        text-decoration: none;
      }
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
        font-weight: bold;
        animation: marquee 15s linear infinite;
        color: #999;
      }
    }
  }

  .App-brand__large, .announces, a, button {
    position: relative;
    z-index: 1;
  }


  .icon {
    color: ${theme.color.secondaryLight}!important;
  }

  @media (max-width: ${theme.breakpoints.largeScreen - 1}px) {


    nav.hNav__frame {
      position: absolute;
      top: 0;
      right: 0;
    }

    .announces {
      display: none;
    }
  }


  @media (min-width: ${theme.breakpoints.largeScreen}px) {
    /* Make room for sidebar nav */
    // width: calc(100% - ${theme.vNav.width}px);

    nav.hNav__frame {
      display: flex;
      align-items: center;
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
