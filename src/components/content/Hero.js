import React from 'react';
import HeroStyle from './../styles/StyleHero';


const Hero = () => {
  const { Container } = HeroStyle;
  const maxTxtLenght = 100;
  let text = 'Donec adipiscing mattis taciti consectetur netus tristique duis erat consectetur mi eget dignissim a mollis a quisque nec vestibulum praesent a a.At a vestibulum.';
  text = (text.length > maxTxtLenght) ? text.substr(0, maxTxtLenght) + ' ...' : text;
  
  return (
    <Container>
      <article>
        <h1 className="hero-title">Hero title</h1>
        <time className="hero-time">hero date here ...</time>
        <p>{ text }</p>
        <button>CTA Button</button>
      </article>
    </Container>
  )
};

export default Hero;
