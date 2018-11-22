import React from 'react';
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components


const Span = styled.span`
  font-family: 'Oswald', sans-serif;
`;

const Logo = ({
  size,
  className,
}) => {

  return (
    <Span className={className}>
      {
        size === 'large' ? 'KILIMANDJARO TV' : 'KMD TV'
      }
    </Span>
  );
}

export default Logo;
