
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';


const style = {};
style.Container = styled.div`
  position: relative;
  z-index: 1;
  background: lime;
  display: flex;
  align-items: flex-end;
  text-align: center;
  height: 300px;
  background-size: cover!important;

  // bottom with transparent gradient
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    ${theme.gradient1}
  }

  .hero-title {
    margin-bottom: 0;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${theme.color.primary}
  }

  .hero-time {
    font-size: 0.7rem;
  }

  time {
    color: ${theme.color.lightGray}
  }

  article {
    position: relative;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 0.7rem;
    color: ${theme.color.primaryHover}

    @media(min-width: 600px) {
      max-width: 400px;
      font-size: 0.8rem;
      margin-bottom: 30px;
    }
    @media(min-width: 900px) {
      max-width: 500px;
    }
  }

  @media(min-width: 600px) {
    height: 350px;
  }

  @media(min-width: 900px) {
    height: 450px;
  }
`;


export default style;
