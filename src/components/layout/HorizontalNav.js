import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './../../settings/basics.js';
import HorizontalNavStyles from './../styles/StyleHorizontalNav';

import MenuUserConnected from './../content/MenuUserConnected';

import IconButton from '@material-ui/core/IconButton';
import IconSrc from '@material-ui/icons/Search';
import IconLogin from '@material-ui/icons/Person';
// // import Logo from './../content/Logo';




// Marquee is depreciated : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
// Find an alternative 
const ScrollingText = ({
  className,
}) => {
  return(
    <section className={className}>
      <marquee>
        <ul>
          <li>KMA 2018 Awards</li>
          <li>Gramen end of year party</li>
          <li>North West Cameroon ladies galla</li>
          <li>Binam end of year party</li>
          <li>Soccer tournament in Brampton</li>
        </ul>
      </marquee>
    </section>
  );
};



class HorizontalNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      // login: false,
      register: true //login:false,
    };

  }

  toggleConnectionStatus = () => {
    this.setState(prevState => {
      return { register: !prevState.register };
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render () {

    const { 
      Container
    } = HorizontalNavStyles;

    const {
      className,
      children,
      dialogLoginHandleOpen,
    } = this.props;


    return (
      <Container className={className}>
        { children }
        <nav className="hNav__frame">
          <ScrollingText
            className="announces"
          />

          { // Hidding Search for now
            false && <Link to="/search">
              <IconButton className={'icon'} aria-label="Search">
                <IconSrc />
              </IconButton>
            </Link>
          }

          <GlobalContext.Consumer>
            {
              (global) => (
                global && global.user 
                
                ?

                <MenuUserConnected />

                :

                <IconButton
                  className={'icon'}
                  aria-label="Connect"
                  onClick={dialogLoginHandleOpen}
                >
                  <IconLogin />
                </IconButton>

              )
            }
          </GlobalContext.Consumer>

        </nav>
      </Container>
    );
  }
};

export default HorizontalNav;
