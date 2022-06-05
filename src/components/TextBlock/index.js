import React from "react";
import styled from "styled-components";

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 50%;
  line-height: 1.5;
  color: var(--white);

  position: relative;

  @media only Screen and (max-width: 48em) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  /* z-index: 1; */
`;
const Topic = styled.span`
  display: flex;
  align-items: center;
  
  justify-content: center;
  margin-bottom: 1rem;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.5rem + 0.5vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;

  @media only Screen and (max-width: 48em) {
    font-size: calc(0.4rem + 0.8vw);
  }
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const Title = styled.div`
  font-size: calc(1rem + 1vw);
  padding-top: 3px;
  line-height: 1.2;
  text-align: justify;
  color: #FFF;
  border-bottom: 2px solid var(--pink);
  @media only Screen and (max-width: 48em) {
    font-size: calc(1rem + 1.5vw);
  }
`;

const SubText = styled.div`
padding-top: 0.5rem;
font-weight: 500;
text-align: justify;
  font-size: calc(0.65rem + 0.65vw);
  color: #fff;
  @media only Screen and (max-width: 48em) {
    font-size: calc(0.55rem + 1.2vw);
  }
`;

const TextBlock = ({ topic, title, subText, children }) => {
  return (
    <Lb id="leftBlock">
      <Topic>
        <Circle />
        <span>{topic}</span>
      </Topic>
      <Title>{title}</Title>
      <SubText>{subText}</SubText>
      {children}
    </Lb>
  );
};

export default TextBlock;
