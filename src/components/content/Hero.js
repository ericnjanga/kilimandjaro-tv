import React from 'react';
import HeroStyle from './../styles/StyleHero';
import Button from "@material-ui/core/Button";
import imgBanner from './../../img/banner-1.jpg';
import IconLocation from '@material-ui/icons/LocationOn';



const Hero = () => {
  const { Container } = HeroStyle;
  const maxTxtLenght = 100;
  let text = 'Phoenix Concert Theatre toronto';
  text = (text.length > maxTxtLenght) ? text.substr(0, maxTxtLenght) + ' ...' : text;
  
  return (
    <Container style={{ background:`url(${imgBanner})` }}>
      <article>
        <h1 className="hero-title">Kaysha en concert</h1>
        <time className="hero-time">19 Janvier 2019 à 20hrs</time>
        <div className="hero-location">
          <IconLocation className="icon" />
          <span>{ text }</span>
        </div>

        <Button
          className="button button-bottom-spacing"
          variant="contained"
          color="primary"
        >
          Savoir plus
        </Button>
      </article>
    </Container>
  )
};

export default Hero;
