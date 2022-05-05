import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled  from "styled-components";
import img from '../../assets/avatar-1.jpg'

const Title1 = styled.h1`
  font-size: calc(1rem + 1vw);
  line-height: 1.2;
  color:#fff;
  padding: 0.7rem 0;
  border-bottom: 2px solid var(--pink);

`;

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
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const SubText = styled.h1`
  font-size: calc(0.55rem + 0.55vw);
  text-align: justify;
  color: #fff;
  padding-top: 3px;
  padding-left: 7px;
`;

const TextBox = styled.div`
    display: flex;
    width: 20rem;
    padding-right: 10px;
`;


const Paper = styled.div`
    margin: 4rem 3rem 4rem 3rem;

`;

export default function MediaControlCard() {

  return (
    <Paper>
    <a href="https://www.google.com/" target="_blank">
    <Card sx={{  
        display: 'flex' , 
        flexDirection:'column',
        alignItems:'center',
        borderRadius: '2rem' ,

        '@media screen and (min-width: 700px) and (max-width: 1080px)':{
            alignItems:'center',
            display: 'flex' , 
            borderRadius: '2rem' ,
            flexDirection:'row', 
            fontColor:'#fff',
        },

        
}} >
      <Box sx={{ display: 'flex' , flexDirection: 'column' , fontColor:'#fff' ,backgroundColor: '#0a0b10'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Topic>
                <Circle/>
                <span>Lorem</span>
            </Topic>
          <Title1>
            Live From Space
          </Title1>
          <TextBox>
          <SubText>
            VeniamUllamco amet tempor eu occaecat laboris pariatur enim. Commodo pariatur in laborum nulla id officia occaecat veniam. Consequat Lorem duis non non id officia et qui ad reprehenderit cillum. Magna minim labore velit anim ipsum commodo sunt amet. Voluptate duis ullamco quis exercitation laboris do consectetur labore consectetur incididunt do id. Laboris dolor dolor anim ex proident incididunt consectetur nisi. consequat nostrud nulla consectetur minim occaecat irure velit proident ipsum.
          </SubText>
          </TextBox>
        </CardContent>
        
   
        
      </Box>
      <CardMedia
        component="img"
        sx={{ 
            width:  352,
                height: 320,
            
            '@media screen and (min-width: 720px) and (max-width: 1080px)':{
                width:  352,
            }
        }}
        image={img}
        alt="Test"
      />
    </Card>
    </a>
    </Paper>
  );

  
}
