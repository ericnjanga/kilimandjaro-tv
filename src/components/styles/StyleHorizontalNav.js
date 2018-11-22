
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {};
style.Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  padding: 0 15px;
  height: 80px;

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
      padding: 0;
      li {
        display: inline-block;
        margin-right: 50px;
        font-size: 0.8rem;
        animation: marquee 15s linear infinite;
      }
    }
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
