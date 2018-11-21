import React from 'react';
import img404 from './../img/404-1.png';
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Figure = styled.figure`
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
`;

const Page404 = () => {
  return (
    <div className="page404">
      <h1>Cette page n'existe pas!</h1>
      <Figure>
        <img
          src={img404}
          alt="Cette page n'existe pas!"
        />
        <figcaption>
          <a href="http://www.betatinz.com/2017/09/dj-arafat-ft-tenor-chigoter-les-tympans.html" target="_blank">http://www.betatinz.com</a>
        </figcaption>
      </Figure>
      <p>
        La page que vous recherchez a peut être été changée ou est temporairement hors d'usage.
      </p>
      <div>
        <NavLink
          to="/"
          className="btn btn-primary text-uppercase"
        >
        Retour à la page d'acceuil
        </NavLink>
      </div>
    </div>
  );
};

export default Page404;
