import React from 'react';
import HeroStyle from './../styles/StyleHero';
import Button from "@material-ui/core/Button";
import imgBanner from './../../img/banner-1.jpg';


const Hero = () => {
  const { Container } = HeroStyle;
  const maxTxtLenght = 100;
  let text = 'Donec adipiscing mattis taciti consectetur netus tristique duis erat consectetur mi eget dignissim a mollis a quisque nec vestibulum praesent a a.At a vestibulum.';
  text = (text.length > maxTxtLenght) ? text.substr(0, maxTxtLenght) + ' ...' : text;
  
  return (
    <Container style={{ background:`url(${imgBanner})` }}>
      <article>
        <h1 className="hero-title">Hero title</h1>
        <time className="hero-time">hero date here ...</time>
        <p>{ text }</p>

        <Button
          className="button button-bottom-spacing"
          variant="contained"
          color="primary"
        >
          CTA Button
        </Button>
      </article>
    </Container>
  )
};

export default Hero;
