import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/wave-copy.svg';
import { tablet } from '../../global/vars';
import arrow from '../../assets/ico-arrow-up-big-active.svg';
import dashboard from '../../assets/dashboard.jpg';
import dashboard2 from '../../assets/dashboard@2x.jpg';
import dashboard3 from '../../assets/dashboard@3x.jpg';
import Title from '../../components/Title';
import Card from '../../components/Card';
import BarPosition from '../../components/BarPosition';


const Solutions = (props) => {
  const [pos, setPos] = useState(0);
  const data = [
    {
      title: <p><b>Face </b> Recognition</p>,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: <p><b>Face </b> Detection</p>,
      desc: " sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
  const next = () => {
    setPos(pos === data.length-1 ? 0 : pos+1);
  }
  const prev = () => {
    setPos(pos === 0 ? data.length-1 : pos-1);
  }
  return (
    <StyledSolutions>
      <Wrapper>
        <Title title="Solution" center/>
        <section>
          <StyledButton left onClick={()=> prev()}>
            <img src={arrow} />
          </StyledButton>
          <BoxImage>
            <img src={dashboard} />
          </BoxImage>
          <div className="container">
            <Card
              className="card"
              left bottom
              title={data[pos].title}
              desc={data[pos].desc}
            />
            <BarPosition pos={pos} total={data.length}/>
          </div>
          <StyledButton onClick={()=> next()}>
            <img src={arrow}  />
          </StyledButton>
        </section>
      </Wrapper>      
    </StyledSolutions>  
  )
}
const StyledSolutions = styled.div`
  background: url(${background}) #1d0b47 no-repeat bottom;
  background-size: contain;
  position: relative;
  width: 100%;
  height: 816px;
  section {
    padding-top: 15%;
    display: flex;
    margin: auto;
    justify-content: center;
    height: 50%;
    width: 70%;
  }

  @media ${tablet} {
  
  }
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  img {
    border: 3px solid linear-gradient(#4b1585, rgba(61,15,115));
  }
`;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-image: linear-gradient(to top, #4b1585,rgba(61,15,115));
  transform: ${props=>props.left ? "rotate(-180deg)": "unset"};
  display: block;
  margin: auto;
  @media ${tablet} {
    width: 100%;
    margin: 0;
  }
`;

const BoxImage = styled.div`
  width: fit-content;
  &:before {
    content:"";
    box-shadow: inset 0px 0px 10px #1d0b47;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
  }
  img {
    position: relative;
    z-index: 1;
  }
`;


export default Solutions;