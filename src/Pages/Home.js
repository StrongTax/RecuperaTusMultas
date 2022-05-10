//This is home page, It will contains all the sections require in this page.
import React  from 'react';
//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import BlogPost from '../components/BlogPost/BlogPost.js';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <BlogPost/>
      {/*<Card1/>*/}
      <Services />
      <Testimonials/>
     <Contact />
    </Container>
  );
};

export default Home;
