
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import theme from './../../settings/theme';

const style = {};
style.DivRow = styled.div`
  display: flex; 
  flex-wrap: wrap;
  margin-right: -${theme.videoThumbnail.padding}px;
  margin-left: -${theme.videoThumbnail.padding}px;

  .col {
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


  @media (min-width: 600px) {
    .col {  
      flex: 0 0 33.33333%;
      max-width: 33.33333%; 
    }
    .col:nth-of-type(3n) {
      // border: 5px solid green;
      padding-right: ${theme.videoThumbnail.padding}px;
      padding-left: 7.5px;
    }
    .col:nth-of-type(3n + 1) {
      // border: 5px solid purple;
      padding-left: ${theme.videoThumbnail.padding}px;
      padding-right: 7.5px;
    }
    .col:nth-of-type(3n + 2) {
      // border: 5px dashed purple;
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
  }


  @media (min-width: 900px) {
    .col {  
      flex: 0 0 25%;
      max-width: 25%; 
    }
    .col:nth-of-type(4n + 1) {
      // border: 5px solid purple;
      padding-left: ${theme.videoThumbnail.padding}px;
      padding-right: 7.5px;
    }
    .col:nth-of-type(4n + 2) {
      // border: 5px dashed purple;
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
    .col:nth-of-type(4n + 3) {
      // border: 5px dashed blue;
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
    .col:nth-of-type(4n) {
      // border: 5px solid green;
      padding-right: ${theme.videoThumbnail.padding}px;
      padding-left: 7.5px;
    }
  }


  @media (min-width: 1200px) {
    .col {  
      flex: 0 0 ${theme.videoThumbnail.maxWidth}px;
      max-width: ${theme.videoThumbnail.maxWidth}px; 
      padding-left: ${theme.videoThumbnail.padding}px!important;
      padding-right: 0!important;
    }
  }

  .spinner-frame {
    flex-direction: column;
    display: flex;    
    min-height: 200px;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export default style;
