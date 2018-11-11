import React from 'react';
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/Favorite';

import Logo from './../content/Logo';


import theme from './../../settings/theme';



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



const HorizontalNav = ({
  className,
  children,
}) => {

  const Nav = styled.nav`
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

  const IconSearch = ({ className, children }) => (
    <IconButton className={className} aria-label="Search">
      <SearchIcon />
    </IconButton>
  );
  const IconNotificationIcon = ({ className, children }) => (
    <IconButton className={className} aria-label="Subscribe">
      <NotificationIcon />
    </IconButton>
  );
  const StyledIconSearch = styled(IconSearch)`
  color: ${theme.color.gray}!important;
    // margin: 8px!important;
  `; 
  const StyledIconNotificationIcon = styled(IconNotificationIcon)`
  color: ${theme.color.gray}!important;
    // margin: 8px!important;
  `; 

  return (
    <Nav className={className}>
      { children }
      <ScrollingText
        className="announces"
      />
      <StyledIconSearch className="btnIcon" />
      <StyledIconNotificationIcon className="btnIcon" />
    </Nav>
  );
};

export default HorizontalNav;
