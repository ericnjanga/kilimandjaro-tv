import React from 'react'
import Button from "@material-ui/core/Button"
import img404 from './../../img/404-1.png'
import { NavLink } from "react-router-dom" 
import Style404 from './../styles/Style404'


const { View } = Style404

const Page404 = () => {
  return (
    <View>
      <h1>Cette page n'existe pas!</h1>
      <figure>
        <img
          src={img404}
          alt="Cette page n'existe pas!"
        />
        <figcaption>
          <a href="http://www.betatinz.com/2017/09/dj-arafat-ft-tenor-chigoter-les-tympans.html" rel="noopener noreferrer" target="_blank">image source: http://www.betatinz.com</a>
        </figcaption>
      </figure>
      <p>
        La page que vous recherchez a peut être été changée ou est temporairement hors d'usage.
      </p>
      <div>
        <NavLink
          to="/"
          className="btn"
        >
          <Button
            className="button button-bottom-spacing"
            variant="contained"
            color="primary"
          >
            Retour à la page d'accueil
          </Button>
        </NavLink>
      </div>
    </View>
  );
};

export default Page404;
