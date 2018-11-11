import React from 'react';


const Logo = ({
  size,
  className,
}) => {

  return (
    <React.Fragment>
      <span className={className}>
        {
          size === 'large' ? 'KILIMANDJARO TV' : 'KMD TV'
        }
      </span>
    </React.Fragment>
  );
}

export default Logo;
