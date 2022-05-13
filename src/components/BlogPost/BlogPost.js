import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import styled from "styled-components";
import img from "../../assets/avatar-1.jpg";

const Title1 = styled.h1`
  font-size: 14;
  line-height: 1.2;
  color: #fff;
  padding: 0.2rem;
  border-bottom: 2px solid var(--pink);
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 600;
  font-size: 15px;
  padding: 0.5rem 1rem;
  margin-top: 11px;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const SubText = styled.h1`
  font-size: 13px;
  text-align: justify;
  color: #fff;
  padding-top: 5px;
  padding-left: 7px;
`;

const TextBox = styled.div`
  display: flex;
  width: 20rem;
  padding-top: 7px;
  padding-right: 10px;
`;

const Paper = styled.div`
          overflow-x: hidden;



          overflow-y: hidden;



  margin: 4rem 3rem 4rem 3rem;
`;

export default function BlogPost() {
  return (
    <div data-aos="fade-up" data-aos-duration="2200">
      <Paper>
        <a href="https://blog.recuperatusmultas.com/" target="__target">
          <Card
            sx={{
              height: "calc(20rem)",
              display: "flex",
              flexDirection: "column",
              fontColor: "#fff",
              alignItems: "center",
              borderRadius: "2rem",

              "@media screen and (min-width: 700px)": {
                height: "calc(20rem)",
                alignItems: "center",
                display: "flex",
                borderRadius: "2rem",
                flexDirection: "row",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontColor: "#fff",
                backgroundColor: "#0a0b10",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Title1>Live From Space</Title1>
                <TextBox>
                  <SubText>
                    VeniamUllamco amet tempor eu occaecat laboris pariatur enim.
                    Commodo pariatur in laborum nulla id officia occaecat
                    veniam. Consequat Lorem duis non non id officia et qui ad
                    reprehenderit cillum. Magna minim labore velit anim ipsum
                    commodo sunt amet. Voluptate duis ullamco quis exercitation
                    laboris do consectetur labore consectetur incididunt do id.
                    Laboris dolor dolor anim ex proident incididunt consectetur
                    nisi. consequat nostrud nulla consectetur minim occaecat
                    irure velit proident ipsum.
                  </SubText>
                </TextBox>
                <Topic>
                  <Circle />
                  <span>Ir al Blog!</span>
                </Topic>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{
                display: "flex",
                width: 330,
                height: 330,
              }}
              image={img}
              alt="Test"
            />
          </Card>
        </a>
      </Paper>
    </div>
  );
}
