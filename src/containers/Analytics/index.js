import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Title from '../../components/Title';
import background from '../../assets/brain-wave.svg';
import illustration from '../../assets/illustration-fr.svg';
import arrow from '../../assets/ico-arrow-up-big-active.svg';
import Card from '../../components/Card';
import { tablet } from '../../global/vars';
import BarPosition from '../../components/BarPosition';



const Analytics = () => {
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
return (
  <StyledAnaytics>
    <Wrapper>
      <Title title="What We Do" />
      <section>
        <StyledNumber>{pos+1}</StyledNumber>
        <div className="container">
          <Card box className="box">
            <img src={illustration} />
          </Card>
          <BarPosition width="90%" pos={pos} total={data.length}/>
        </div>
        <Card
          className="card"
          left bottom
          title={data[pos].title}
          desc={data[pos].desc}
          buttonText={"Learn More"}
          buttonOnClick={()=>{}}
        />
        <StyledButton onClick={()=>next()}>
          <img src={arrow} />
        </StyledButton>
      </section>
    </Wrapper>
  </StyledAnaytics>
);
}

const StyledAnaytics = styled.div`
  position: relative;
  background: url(${background}) #1d0b47 no-repeat left;
  width: 100%;
  height: 816px;
  margin: auto;
  section {
    display: flex;
    padding-top: 162px;
    .container {
      display: block;
      margin: auto;
      z-index: 2;
    }
    .box {
      display: block;
      margin: auto;
    }
    .card {
      margin-left: -20px;
      padding: 20px 40px;
    }
  }
  @media ${tablet} {
    height: fit-content;
    section {
      flex-direction: column;
      padding-top: 125px;
      .container {
        width: 100%;
      }
      .box{
        width: 100%;
        img {
          width: 100%;
        }
      }
      .card {
        width: 100%;
        margin: 0;
      }
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1440px;
  padding-left: 400px;
  padding-top: 5%;
  padding-right: 172px;
  margin: auto;
  @media ${tablet} {
    padding: 20px;
  } 
`;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-image: linear-gradient(to top, #4b1585,rgba(61,15,115));
  display: block;
  margin: auto;
  margin-left: 20px;
  @media ${tablet} {
    width: 100%;
    margin: 0;
  }
`;

const StyledNumber = styled.h1`
  color: #e0c8ff;
  font-size: 44px;
  font-weight: 500;
  left: 30px;
  position: absolute;
  z-index: 3;
  @media ${tablet} {
    top: 60px;
  }
`;

export default Analytics;