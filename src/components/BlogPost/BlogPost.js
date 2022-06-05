import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import styled from "styled-components";
import img from "../../assets/trailer.png";

const Title1 = styled.h1`
  font-size: 1.5rem;
  line-height: 1.2;
  color: #fff;
  padding-bottom: 1.2rem;
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
  font-size: 1rem;
  text-align: justify;
  color: #fff;
  padding-top: 1rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
`;

const TextBox = styled.div`
  display: flex;
  width: 23rem;
  height: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
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
              height: "calc(40rem)",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#0a0b10",
              fontColor: "#fff",
              alignItems: "center",
              borderRadius: "2rem",

              "@media screen and (min-width: 700px)": {
                height: "20rem",
                alignItems: "center",
                alignContent: "center",
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
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Title1>
                  ¿Tiene flotilla de motos, vehículos
                  <br /> o camiones y constantemente <br />
                  tiene multas?
                </Title1>

                <TextBox>
                  <SubText>
                    Costos especiales por contratos anuales! Sube tu multa y te
                    ofrecemos una Cotización totalmente gratis
                  </SubText>
                </TextBox>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{
                display: "flex",
                width: 330,
                height: "auto",
                borderRadius: "1.5rem",
              }}
              image={img}
              alt="Test"
            />
          </Card>

          <Topic>
            <Circle />
            <span>Ir al Blog!</span>
          </Topic>
        </a>
      </Paper>
    </div>
  );
}
