import React from 'react';
import styled from 'styled-components';
import background from '../../assets/pattern-wave-pattern-wave-copy-mask.svg';
import Card from '../../components/Card';
import globe from '../../assets/globe.svg';
import n from '../../assets/n.svg';
import user from '../../assets/user-silhouette.svg';
import bus from '../../assets/bus.svg';
import lpr from '../../assets/icon-lpr.svg';
import { mobileL, tablet } from '../../global/vars';

const Overview = (props) => {
  return (
    <StyledOverview>
      <Wrapper>
        <section>
        <div className="center">
          <img className="n" src={n} ></img>
        </div>
        <div className="center">
          <img className="globe" src={globe} ></img>
        </div>
        
        <Card className="card" bottom right absolute styles={{marginTop: "10%", marginLeft: "9%"}}>
          <TitleCard><b>Face</b> Recognition</TitleCard>
          <GridLayout2Column>
            <div>
              <SubtitleCard>Total Person</SubtitleCard>
              <DetailCard>8978</DetailCard>
            </div>
            <div>
              <SubtitleCard>Identified Person</SubtitleCard>
              <DetailCard>3238</DetailCard>
            </div>
          </GridLayout2Column>
        </Card>
        <Card className="card" bottom left absolute styles={{marginTop: "12%", marginRight: "8%", right: "0"}}>
          <TitleCard><b>Traffic</b> Surveilance</TitleCard>
          <GridLayout2Column>
            <div>
              <SubtitleCard>Total Vehicle</SubtitleCard>
              <DetailCard>8978</DetailCard>
            </div>
            <div>
              <SubtitleCard>Total License Plat</SubtitleCard>
              <DetailCard>3238</DetailCard>
            </div>
          </GridLayout2Column>
        </Card>
        <Card className="card" bottom right absolute styles={{marginTop: "25%", marginLeft: "10%"}}>
          <TitleCard><b>Face</b> Detection</TitleCard>
          <FlexLayoutColumn>
            <div className="item">
              <Box><img src={user} /></Box>
              <TitleBox>Male</TitleBox>
              <SubtitleBox>27 Apr 2019</SubtitleBox>
              <DetailBox>Today, 25:20</DetailBox>
            </div>
            <div className="item">
              <Box><img src={user} /></Box>
              <TitleBox>Male</TitleBox>
              <SubtitleBox>27 Apr 2019</SubtitleBox>
              <DetailBox>Today, 25:20</DetailBox>
            </div>
            <div className="item">
              <Box><img src={user} /></Box>
              <TitleBox>Male</TitleBox>
              <SubtitleBox>27 Apr 2019</SubtitleBox>
              <DetailBox>Today, 25:20</DetailBox>
            </div>
          </FlexLayoutColumn>
        </Card>
        <Card className="card" bottom left absolute styles={{marginTop: "25%", marginRight: "10%", right: "0"}}>
          <TitleCard><b>Traffic</b> Surveilance</TitleCard>
          <div>
            <FlexLayoutColumn>
              <Box><img src={bus} /></Box>
              <Box className="padding"><img src={lpr} /></Box>
              <div>
                <TitleBox>SS 123</TitleBox>
                <SubtitleBox>Car</SubtitleBox>
                <DetailBox>Today, 25:20</DetailBox>
              </div>
            </FlexLayoutColumn>
          </div>
          <div>
            <FlexLayoutColumn>
              <Box><img src={bus} /></Box>
              <Box className="padding"><img src={lpr} /></Box>
              <div>
                <TitleBox>SS 123</TitleBox>
                <SubtitleBox>Car</SubtitleBox>
                <DetailBox>Today, 25:20</DetailBox>
              </div>
            </FlexLayoutColumn>
          </div>
          <div>
            <FlexLayoutColumn>
              <Box><img src={bus} /></Box>
              <Box className="padding"><img src={lpr} /></Box>
              <div>
                <TitleBox>SS 123</TitleBox>
                <SubtitleBox>Car</SubtitleBox>
                <DetailBox>Today, 25:20</DetailBox>
              </div>
            </FlexLayoutColumn>
          </div>
        </Card>
        </section>
        <section>
          <h1>Extending Vision Beyond Imagination</h1>
          <StyledButton>Explore More</StyledButton>        
        </section>
      </Wrapper>      
    </StyledOverview>  
  )
}
const StyledOverview = styled.div`
  background: url(${background}) #1d0b47 no-repeat bottom;
  background-size: contain;
  position: relative;
  width: 100%;
  height: 100vh;
  h1 {
    margin: 0;
    color: white;
    text-align: center;
    letter-spacing: 2.21px;
    font-weight: normal;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    font-family: 'work sans';
  }
  
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height:920px;
    position: absolute;
    .globe {
      max-width: 508px;
      max-height: 508px;
      width: 45%;
      height: 100%;
    }
    .n {
      max-width: 50px;
      max-height: 50px;
      width: 100%;
      height: 100%;
    }
  }

  section:first-child {
    height: 85vh;
    max-height: 800px;
  }

  @media ${tablet} {
    section:first-child {
      height: 60vh;
    }
    
    .card {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const TitleCard = styled.p`
  color: #e0c8ff;
  font-size: 16px;
  font-family: 'Work Sans', sans-serif;
`;

const SubtitleCard = styled.p`
  font-size: 16px;
  color: #c8a6ff;
`;

const DetailCard = styled.p`
  font-size: 24px;
  color: #ffffff;
  text-shadow: 0 0 6px #c789ff;
  letter-spacing: 0.5px;
`;

const GridLayout2Column = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
`;

const FlexLayoutColumn = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  
  div {
    margin: 3px;
  }
`;

const Box = styled.div`
  border: 2px solid rgba(122,76,164,0.3);
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(122, 76, 164, 0.3);
  background-color: #320e61;
  display: flex;
  justify-content: center;
  padding: 2%;
  &.padding {
    padding: 2% 15px;
  }
`;

const TitleBox = styled.p`
  text-shadow: 0 0 6px #e0beff;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
`;


const SubtitleBox = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #c8a6ff;
`;

const DetailBox = styled.p`
  font-size: 12px;
  color: #825cc0;
`;

const StyledButton = styled.button`
  border-radius: 19.4px;
  border: solid 1.2px #ffffff;
  background: none;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
  padding: 10px 20px;
  display: block;
  margin: 20px auto;
  
`;

export default Overview;