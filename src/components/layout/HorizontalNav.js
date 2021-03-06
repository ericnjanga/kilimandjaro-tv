import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './../../settings/basics.js'
import HorizontalNavStyles from './../styles/StyleHorizontalNav'
import Logo from './../content/Logo'
import IconMenu from '@material-ui/icons/Menu'

import MenuUserConnected from './../content/MenuUserConnected'

import IconButton from '@material-ui/core/IconButton'
import IconSrc from '@material-ui/icons/Search'
import IconLogin from '@material-ui/icons/Person'
// // import Logo from './../content/Logo'




// Marquee is depreciated : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
// Find an alternative 
const ScrollingText = ({
  className,
}) => {
  return(
    <section className={className}>
      <marquee>
        <ul>
          <li>Lancement officiel de Kilimandjaro TV: 26 Janvier 2019</li>
        </ul>
      </marquee>
    </section>
  )
}



class HorizontalNav extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      // login: false,
      register: true //login:false,
    }

  }

  toggleConnectionStatus = () => {
    this.setState(prevState => {
      return { register: !prevState.register }
    })
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }


  render () {

    const { 
      Container
    } = HorizontalNavStyles

    const {
      className,
      onClick1,
      leftNavActive,
      dialogLoginHandleOpen,
    } = this.props


    return (
      <Container className={className}>
        {/* { children } */}


        <section className="App-brand__large">
          <button
            onClick={onClick1}
          >
            <IconMenu />
          </button>
          <Link to="/">
            <Logo size="large" />
          </Link>
        </section>


        {
          leftNavActive && 
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
        }
      </Container>
    )
  }
}

export default HorizontalNav
