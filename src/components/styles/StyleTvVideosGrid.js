
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {};
style.DivRow = styled.div`
  display: flex; 
  flex-wrap: wrap;
  margin-right: -${theme.videoThumbnail.padding}px;
  margin-left: -${theme.videoThumbnail.padding}px;

  .col {
    text-align: center;
    position: relative;
    margin-bottom: ${theme.videoThumbnail.padding}px;
    width: 100%;
    min-height: 1px;
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: ${theme.videoThumbnail.padding}px;
    padding-left: ${theme.videoThumbnail.padding}px;
  } 
  .col:nth-of-type(2n) {
    padding-left: 7.5px;
  }
  .col:nth-of-type(2n + 1) {
    padding-right: 7.5px;
  }


  .col {  
    flex: 0 0 50%;
    max-width: 50%; 
    img {
      max-width: 100%;
      border-radius: 10px;
    }
    .thumbnail-title {
      margin-top: 5px;
      font-size: 1.2rem;
    }
    color: #ccc;
    font-weight: bold;
  }
`;

export default style;
