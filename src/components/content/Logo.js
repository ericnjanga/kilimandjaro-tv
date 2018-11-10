import React from 'react';


const Logo = ({
  size,
  className,
}) => {

  return (
    <React.Fragment>
      <a href="#" className={className}>
        {
          size === 'large' ? 'KILIMANDJARO TV' : 'KMD TV'
        }
      </a>
    </React.Fragment>
  );
}

export default Logo;
