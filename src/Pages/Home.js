//This is home page, It will contains all the sections require in this page.
import React from "react";
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Clients from "../components/Clients/index.jsx"
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import BlogPost from "../components/BlogPost/BlogPost.js";
import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  padding-top: 4rem;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Clients/>
      <About />
      <BlogPost />
      {/*<Card1/>*/}
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </Container>
  );
};

export default Home;
