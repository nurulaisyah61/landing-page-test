import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`

`; 

function Background(props) {
  return (
    <StyledBackground>
      {props.children}
    </StyledBackground>  
  )
}

export default Background;