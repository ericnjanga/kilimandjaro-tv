import React from 'react';
import { NavLink } from 'react-router-dom';
import VerticalNavStyles from './../styles/StyleVerticalNav';
import IconMovies from '@material-ui/icons/LocalMovies';
import IconTickets from '@material-ui/icons/Loyalty';
import BuzzIcon from '@material-ui/icons/Whatshot';
import ListOfAdds from './../tests/ListOfAdds'; 
import Logo from './../content/Logo';


const { 
  Aside,
} = VerticalNavStyles;

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
          <NavLink className="item" to="/tickets" activeClassName="active">
            <IconTickets />
            <span>Tickets</span>
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
