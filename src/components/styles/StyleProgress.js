
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {};
style.ProgressContainer = styled.div`
  flex-direction: column;
  display: flex;    
  min-height: 200px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${theme.color.lightGray};


  .progress {
    // position: absolute;
    // right: 10px;
    // width: 30px!important;
    // height: 30px!important;
    background: transparent;
  }
`;


export default style;
