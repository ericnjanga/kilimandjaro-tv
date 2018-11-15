import React from 'react';
import { NavLink } from 'react-router-dom';
import theme from './../../settings/theme';

import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
 
import IconMovies from '@material-ui/icons/LocalMovies';
import IconNews from '@material-ui/icons/KeyboardVoice';
// import CloseIcon from '@material-ui/icons/Close';
import BuzzIcon from '@material-ui/icons/Whatshot';
import ListOfAdds from './../tests/ListOfAdds'; 

import Logo from './../content/Logo';

const asidePadding = '30px';
const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 170px;
  background-color: ${theme.color.secondary};
  transition: background-color 0.2s ease-in-out;

  > ul {
    list-style: none;
    padding: 0;
  }


  .App-brand { 
    background: #fff;
    color: #22343c;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    height: 80px;
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
    background: ${theme.color.primary};
    text-decoration: none;
  }


  .item {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: ${theme.color.lightGray};

    span {
      display: block;
      margin-top: 10px;
      font-size: 0.7rem;
      text-transform: uppercase;
    }
  } // .item

  .add-container {
    flex: 1;
    overflow-y: scroll;
    margin: 40px 0 50px 0;
    padding: 0 ${asidePadding};
  }

  footer {
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


const VerticalNav = ({
  className,
}) => {
  return (
    <Aside className={className}>
      <NavLink exact to="/" className="App-brand" activeClassName="active">
        <Logo
          size="small'"
        /> 
      </NavLink>
      
      <ul>
        <li>
          <NavLink className="item" to="/films" activeClassName="active">
            <IconMovies />
            <span>Films</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="item" to="/buzz" activeClassName="active">
            <BuzzIcon />
            <span>Buzz</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="item" to="/news" activeClassName="active">
            <IconNews />
            <span>Nouvelles</span>
          </NavLink>
        </li>
      </ul>

      <section className="add-container">
        <ListOfAdds />
      </section>

      <footer>
        <p><b>Kilimandjaro TV</b></p>
        <p>416 - 000 - 0000</p>
        <p>kili@gmail.com</p>
        <p>&copy; 2018, Toronto</p>
      </footer>
    </Aside>
  );
};

export default VerticalNav;
