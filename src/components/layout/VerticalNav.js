import React from 'react'
import { NavLink } from 'react-router-dom'
import VerticalNavStyles from './../styles/StyleVerticalNav'
import IconMovies from '@material-ui/icons/LocalMovies'
import IconTickets from '@material-ui/icons/Loyalty'
import BuzzIcon from '@material-ui/icons/Whatshot'
import Logo from './../content/Logo'


const { 
  Aside,
} = VerticalNavStyles

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
          <NavLink className="item" to="/tv" activeClassName="active">
            <IconMovies />
            <span>TV</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="item" to="/films" activeClassName="active">
            <IconMovies />
            <span>Films</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="item deactivated"
            to="/buzz"
            activeClassName="active"
            onClick={ (event)=>{ event.preventDefault() } }
          >
            <BuzzIcon />
            <span>Buzz</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="item deactivated"
            to="/tickets"
            activeClassName="active"
            onClick={ (event)=>{ event.preventDefault() } }
          >
            <IconTickets />
            <span>Tickets</span>
          </NavLink>
        </li>
      </ul>


      <footer>
        <p><b>Kilimandjaro TV</b></p>
        <p>647 - 825 - 1694</p>
        <p>kilitvlive@gmail.com</p>
        <p>&copy; 2018, Toronto</p>
        <p>Inspiration: <a href="https://jewlia.ru/" target="_blank">jewlia</a></p>
      </footer>
    </Aside>
  );
};

export default VerticalNav;
