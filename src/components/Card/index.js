import styled from "styled-components";
import React  from 'react';

const CARD = styled.div`
  height: calc(9rem + 12vw);
  width: calc(10rem + 12vw);
  background-color: var(--nav2);
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translate(-50%);
  border-radius: 50%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const TEXT = styled.h3`
  color: var(--white);
  padding: 0 calc(1.5rem + 1.5vw);
  text-align: center;
  font-size: calc(0.7rem + 0.6vw);
`;

const NAME = styled.h2`
  color: var(--pink);
  padding-bottom: .5rem;
  font-size: calc(0.6rem + 1.1vw);
`;

const Card = ({ name, text, image }) => {
  const avatar = require(`../../assets/${image}.jpg`).default;

  return (
    <CARD>
      <Image img={avatar} width="400" height="400" />
      <NAME>{name}</NAME>
      <TEXT>{text}</TEXT>
      
    </CARD>
  );
};

export default Card;
