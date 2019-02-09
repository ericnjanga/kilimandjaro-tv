import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import ProgressStyle from './styles/StyleProgress'


const Preloader = ({
  darkTone,
  lightTone,
  text
}) => {

  const {
    ProgressContainer,
  } = ProgressStyle

  return (
    <ProgressContainer
      className={`${darkTone?'darkTone':'lightTone'}`}
    >
      <CircularProgress
        // className="progress"
        color="secondary"
      />
      { text && text }
    </ProgressContainer>
  );
}
 
export default Preloader;