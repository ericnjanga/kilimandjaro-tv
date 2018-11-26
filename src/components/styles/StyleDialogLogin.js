
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';


const style = {};
const containerWidth = 440;

const WrapperStyle = `
  @media(min-width: ${containerWidth + 20}px) {
    max-width: ${containerWidth}px;
  }

  flex: 1 1 auto;
  padding: 0 24px 0 24px;
  text-align: center;

  br {
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    border-bottom: 1px solid #ccc;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

style.DivContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  @media(min-width: 420px) {
    max-width: ${containerWidth}px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 60px;
  }

  .progress {
    position: absolute;
    right: 10px;
    width: 30px!important;
    height: 30px!important;
    background: transparent;
  }

  h1 {
    margin-bottom: 10px;
    line-height: 2.5rem;
    font-size: 1.9rem;
  }
  h2 {
    font-size: 1.2rem;
    color: ${theme.color.gray};
  }

  .button {
    width: 100%;
  }
  .button-bottom-spacing {
    margin-bottom: 10px;
  }

  .btn-link {
    padding: 0;
    color: #007bff;
    min-height: initial;
    font-weight: bold;
    display: inline-block;
    &:hover {
      color: #0056b3;
      background-color: transparent;
      span {
        text-decoration: underline;
      }
    }
  }

  .txtfield-bottom-space {
    margin-bottom: 20px;
  }

  header p {
    margin-bottom: 0;
  }

  h1, h2,
  p {
    text-align: center;
  }
  button {
    text-transform: inherit;
  }
  p.separator {
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .btn-secondary {
    background-color: rgb(66, 133, 244);
  }
  footer {
    font-size: .8rem;
    a {
      font-weight: bold;
    }
  }


  @media(min-width: ${containerWidth + 20}px) {
    h1 {
      font-size: 2.1rem;
    }
    p.separator {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }


  .headerContainer,
  .footerContainer {
    ${WrapperStyle}
  }
`;


export default style;
