import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/tick.svg";
import Cone from "../../assets/upload.svg";
import check from "../../assets/check.svg";
import Capsule from "../../assets/contact.svg";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

// const TextBlock = lazy(() => import("../../components/TextBlock"));
// const SvgBlock = lazy(() => import("../../components/SvgBlock"));

const ServiceSection = styled.section`
  width: 100%;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;

const Subtitle = styled.h3`
color: #04e824;
color-text: #04e824; 
  }
`;

const Button = styled.button`
  display: flex;
  background-color: var(--purple);
  font-weight: 600;
  margin-top: 1rem;
  padding: 0.7rem 1rem;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  color: var(--white);
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  text-align: center;
  font-size: 2rem;
  margin-top: 4rem;
  position: relative;

  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  opacity: 80%;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  opacity: 60%;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  margin-top: 10rem;
  margin-bottom:-25rem;
  padding-bottom:15rem;

  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 20%;
  right: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
    top: 25%;
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    ////
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),

        start: "top top+=80",

        end: "bottom bottom",

        pin: element,
        pinReparent: true,
      },
    });
    t1.fromTo(
      document.getElementById("line"),

      {
        height: "10rem",
      },
      {
        height: "1rem",
        duration: 1,
        opacity: "40%",
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      // console.log(el.childNodes);
      if (mq.matches) {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=100",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      } else {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              //toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 200,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el.childNodes[1], {
              transform: "scale(0)",
  
              ease: "power2.inOut",
  
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el.childNodes[1],
                start: "top center",
                end: "bottom center",
                scrub: true,
                snap: true,
              }
            }
          );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title className="title">¿Cual es nuestro Proceso?</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Privacidad y Confidencialidad"
          title={
            <h4>
              Consulta y Autoriza nuestro aviso de privacidad y confidencialidad
            </h4>
          }
          subText={
            <h4>
              Recupera Tus Multas tiene un gran compromiso <br />
              con sus Usuarios y su Privacidad
            </h4>
          }
        >
          <Button> Aviso de Privacidad</Button>
        </TextBlock>

        <OBJ>
          <img src={Tube} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Escaneo"
          title={<h4>Sube tu multa</h4>}
          subText={
            <h4>
              Escanea en formato PDF Asegúrate que se vea clara y nítida la
              multa, ya que nuestro equipo trabajará con tu archivo.
              <br />
              <br />
              Si tu multa contiene Citatorio y Notificación, súbelos también.
            </h4>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develope.svg" />
      </Content>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Revisión"
          title={<h4>Revisáremos tu Multa!</h4>}
          subText={
            <h4>
              Una vez recibido tu archivo, aprovecháremos nuestro desarrollo
              tecnologico para analizar tu caso y nos pondremos en contacto
              contigo para darte una respuesta de cotización.
            </h4>
          }
        />
        <OBJ>
          <img src={check} alt="check" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develope.svg" />
      </Content>

      <Content>
        <TextBlock
          topic="Solucion!"
          title={<h4>Nos contactáremos contigo</h4>}
          subText={
            <h4>
              Dependiendo del tipo de multa, te compartiremos el procedimiento a
              seguir para recuperar tu multa.
              <br />
              <Subtitle>Daremos una solución a las multas indebidas.</Subtitle>
            </h4>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content>
    </ServiceSection>
  );
};

export default Services;
