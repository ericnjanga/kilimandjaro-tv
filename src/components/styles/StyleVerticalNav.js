
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme'; 

const style = {};
const asidePadding = '30px';
style.Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: ${theme.vNav.width}px;
  height: 100vh;
  background-color: ${theme.color.primary};
  transition: background-color 0.2s ease-in-out;

  > ul {
    list-style: none;
    padding: 0;
  }


  .App-brand {
    color: #fff;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    height: 60px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: bold;
  }
  .App-brand,
  .item { 
    transition: ${theme.transition.basic};
  }


  .item.active,
  .item:hover,
  .App-brand.active,
  .App-brand:hover { 
    color: ${theme.color.primaryHover};
    // background: ${theme.color.primary};
    text-decoration: none;
  }


  .item {
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    color: ${theme.color.lightGray};

    span {
      display: block;
      font-size: 0.7rem;
      text-transform: uppercase;
    }
  } // .item

  .item.deactivated {
    opacity: 0.3;
  }

  .adds-list {
    flex: 1;
    overflow-y: scroll;
    margin: 40px 0 50px 0;
    padding: 0 ${asidePadding};
  }

  footer {
    margin-top: auto;
    padding: 0 ${asidePadding} ${asidePadding} ${asidePadding};
    color: #ccc;
    font-size: .65rem;
    line-height: 1.1rem;
    text-align: center;
    p {
      margin: 0;
    }
  }
`;

export default style;
