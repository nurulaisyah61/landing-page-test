import React from 'react';
import styled from 'styled-components';
import { tablet } from '../../global/vars';

const StyledBarPosition = styled.div`
    display: grid;
    padding-top: 10px;
    position: absolute;
    width: ${props=> props.width? props.width: "100%"};
    grid-template-columns: repeat(${props => props.total}, 1fr);
    @media ${tablet} {
        position: relative;
        width: 100%;
    }
`;

const StyledBar = styled.div`
    opacity: 0.1;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #c789ff;
    border: solid 3px #c493ff;
    &.active {
        opacity: 0.4;
    }
`;

const StyledNumber = styled.p`
  font-family: "work sans";
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 6px;
  color: #ffffff;
`;



const BarPosition = (props) => {
  return (
    <StyledBarPosition {...props}>
      {[...Array(props.total)].map( (e, i) => {
          return (
            <StyledBar key={i} className={props.pos===i? "active": ""}/>
          );
      })}
      <StyledNumber>{props.pos+1}/{props.total}</StyledNumber>
    </StyledBarPosition>  
  )
}

export default BarPosition;