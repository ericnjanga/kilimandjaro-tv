import React from 'react';

import logoImg from './../../img/kmd-tv1.jpg'

const Logo = ({
  className,
}) => {

  console.log('....logoImg = ', logoImg)

  return (
    <React.Fragment>
      <img
        className={className}
        src={logoImg}
        alt={'Kilimandjaro TV'}
      />
      <span>Kilimandjaro TV</span>
    </React.Fragment>
  );
}

export default Logo;
