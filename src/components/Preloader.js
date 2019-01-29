import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import ProgressStyle from './styles/StyleProgress'


const Preloader = ({
  text
}) => {

  const {
    ProgressContainer,
  } = ProgressStyle

  return (
    <ProgressContainer>
      <CircularProgress
        // className="progress"
        color="secondary"
      />
      { text && text }
    </ProgressContainer>
  );
}
 
export default Preloader;