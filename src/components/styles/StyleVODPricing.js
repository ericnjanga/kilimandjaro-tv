
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
// import theme from './../../settings/theme';

const style = {};
style.DivRow = styled.div`
  .pricing-rent {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      font-size: 0.8rem;
      color: #999;
      margin-right: 10px;
      color: #3dacc7;
      font-weight: bold;
      &.price-ca {
        color: #d06896;
      }
      &.price-us {
        color: #3dacc7;
      }
      &.price-eu {
        color: #1e8ec7;
      }
    } 
  }
`;

export default style;
