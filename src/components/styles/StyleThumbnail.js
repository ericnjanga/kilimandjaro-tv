
import theme from './../../settings/theme';
import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components

/**
 * Common styles for video thumbnails
 */
const style = {}
style.colorOff = `#cacaca`
style.time = `
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-block;
  background: ${style.colorOff};
  padding: 5px 10px;
  color: #000;
  font-weight: bold;
  font-size: 0.7rem;
`
style.imgThumbnail = `
  background-color: ${style.colorOff};
  border: 1px solid ${style.colorOff};
`
style.thumbnailTitle = `
  text-transform: uppercase;
  font-size: 1rem;
`

export default style;
