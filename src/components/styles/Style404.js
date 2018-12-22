
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {
  View: styled.div`
    padding-top: 70px;
    text-align: center;
    display: flex;
    height: 100vh;
    flex-direction: column;

    h1, p {
    } 
    .btn {
      background: #666;
      border: 1px solid #666;
    }
    figure {
      margin: 0;
      margin-bottom: 30px;
      img {
        max-width: 100%;
      }
      figcaption {
        font-size: 0.7rem;
      }


      @media (min-width: 501px) {
        img {
          max-width: 500px;
        } 
      }
    }
    figcaption a {
      color: ${theme.color.darkGray};
    }

    @media (min-width: 501px) { 
      p {
        margin-left: auto;
        margin-right: auto;
        max-width: 500px;
      }
    }
  `,
};


export default style;
