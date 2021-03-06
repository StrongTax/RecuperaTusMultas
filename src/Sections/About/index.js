import React from "react";
import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.svg";
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";
import Clients from "../../components/Clients/index.jsx"

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  overflow-x: hidden;

  overflow-y: hidden;
  padding-top: 22rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding-top: 12rem;

  }

`;
const Waves = styled.img`
  width: 101%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 15rem;
s  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 1.5rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 1rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  padding-top: 10%;
  font-size: 2rem;
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Human = styled.div`
  width: 40%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.9rem + 0.9vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      <Clients/>
      <div data-aos="fade-right" data-aos-duration="2200">
        <Hand>
          <img src={hand} alt="" />
        </Hand>
        <Main>
          <div>
            <Title>Acerca de Nosotros</Title>
            <CurvedLine />
          </div>
          <Content>
            <Rocket>
              <img src={rocket} alt="" width="400" height="400" />
            </Rocket>
            <AboutText>
              <Human>
                <img src={human} alt="" width="400" height="400" />
              </Human>

              <Text>
                Somos un grupo de Abogados Fiscalistas e Ingenieros expertos en
                inteligencia artificial, principalmente nos dedicamos a la
                defensa fiscal en todo M??xico.
              </Text>

              <div>
                <Circle style={{ backgroundColor: "var(--purple)" }} />
                <Circle style={{ backgroundColor: "var(--pink)" }} />
                <Circle style={{ backgroundColor: "var(--black)" }} />
              </div>
            </AboutText>
          </Content>
        </Main>
      </div>
    </AboutSection>
  );
};

export default About;
