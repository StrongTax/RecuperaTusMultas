import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from 'react-grid-system';
import img from "../../assets/avatar-1.jpg"


const Topic = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: flex;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;


function Description() {
  return (
   
    <Paper>
    <Container>
      <Row>
      <Col>
      <Topic>
            <Circle />
            <span>Titulo 1</span>
       </Topic>
        <SubText>Incididunt pariatur Lorem enim ad consectetur est culpa.</SubText>
        <Text>Voluptate eiusmod magna proident ex mollit enim duis tempor pariatur Lorem officia occaecat. Ipsum fugiat anim proident ut id magna sunt. Lorem anim amet ad consequat quis culpa voluptate ullamco proident consequat minim laboris minim. Irure officia nulla aute cupidatat dolor amet Lorem nisi nulla ut qui ut anim. Duis exercitation eu incididunt cupidatat aliqua. In ea amet id do elit laboris officia irure exercitation proident.</Text>
    </Col> 
    <Col>
        <Chart>
                <img src= {img} alt="Test" width="300" height=""/>
        </Chart>  
    </Col>
      </Row>
      
     
    </Container>
    </Paper>
  );
}


const Paper = styled.div`
  height: 100%;
  width: 50%;
  background-color: #34403A;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  margin-bottom: 6rem;
 
    
  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;


const Chart = styled.div`
  display: flex;
 margin-left: auto;
    margin-bottom: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;
  height: 20rem;
  width: 20rem;
  border-radius: 4rem;
  

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    border-radius: 4rem;

}

`;

const Title = styled.h3`
margin-top:1rem;
  color: #18FF6D;
  text-align: justify;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const SubText = styled.h2`
margin-top:1rem;
margin-left: 1rem;
  
color: #18FF6D;
  
  text-align: left;
`;

const Text = styled.h3`
margin-left: 1.5rem;

  text-align: justify;
  font-weight: normal;
  padding: 0.5rem;
  `;

export default Description;
