import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/arrow.svg'
import { darkIndigo, mobileL } from '../../global/vars';
import path2 from '../../assets/path-2.svg'

const StyledCard = styled.div`
  border-radius: 5px;
  padding: 20px;
  width: fit-content;
  height: fit-content;
  position: ${props => props.absolute? 'absolute': 'relative'};
  &:before {
    content: "";
    border-radius: 5px;
    position: absolute;
    background: ${props=> props.box ? "linear-gradient(to bottom, #4b1585 -21%, #270a52 119%)": `url(${path2})`};
    background-size: cover;
    background-position: center center; 
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: ${props=> props.box ? "0 6px 16px 2px rgba(25, 3, 57, 0.5)" : "unset"};
  ;
  }
  &:after {
    content: " ";
    width: 80%;
    height: ${props => props.box ? 0 : "5px"};
    background-color: ${darkIndigo};
    position: absolute;
    top: ${props => props.top ? -1 : "unset"};
    left: ${props => props.right ? 0 : "unset"};
    right: ${props => props.left ? 0 : "unset"};
    bottom: ${props => props.bottom ? 0 : "unset"};
  }
  ${props => props.styles}

  @media (${mobileL}) {
    margin: 0 auto;
    position: relative;
  }
  
`;

const StyledTitle = styled.div`
  font-family: "work sans";
  font-size: 24px;
  font-weight: 300;
  position: relative;
  color: #ffffff;
  width: fit-content;
  padding: 10px;
  p{
    margin: 0;
  }
  b {
    font-weight: 800;
  }
  &:after {
    content: "";
    margin: 10px 0;
    display: block;
    height: 1px;
    width: 60%;
    border-radius: 4px;
    /* box-shadow: 0 0 1px 1px #c789ff; */
    border: solid 1px #c493ff;
  }
`;

const StyledDesc = styled.div`
  text-shadow: 0 0 1px #e0beff;
  font-family: "work sans";
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: 0.26px;
  color: #e0c8ff;
  padding: 10px;
  height: 300px;
  overflow: hidden;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  font-family: 'work sans';
  font-size: 18px;
  font-weight: 500;
  color: #bc8cfb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  width: 160px;
  padding: 10px;
  img {
    display: block;
    margin-bottom: -3px;
  }
`;

const Card = (props) => {
  return (
    <StyledCard {...props}>
      {props.title && 
        <StyledTitle>{props.title}</StyledTitle>
      }
      {props.desc && 
        <StyledDesc>{props.desc}</StyledDesc>
      }
      {props.buttonText && 
        <StyledButton onClick={()=>props.buttonOnClick}>
            {props.buttonText}
            <img src={arrow} />
        </StyledButton>
      }
      {props.children}
    </StyledCard>  
  )
}

export default Card;