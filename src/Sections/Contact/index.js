import React from "react";
import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import WhatsApp from "../../assets/whatsapp-square-brands.png";
import Twitter from "../../assets/twitter-square-brands.svg";
import styled from "styled-components";
import emailjs from "emailjs-com";
import GUploader from "./GUploader";

const ContactSection = styled.section`
  overflow-x: hidden;

  overflow-y: hidden;

  width: 100%;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
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

const SubText = styled.h4`
  color: var(--white);
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: calc(0.5rem + vw);
  padding: 1rem;
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(30%) sepia(50%) saturate(500%) hue-rotate(430deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    padding: 1rem 5rem 1rem 1rem;
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 2rem;
    color: #eff7f8;
    &:active {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    align-items: center;
    justify-text: center;
    justify-content: center;
    padding: 0.7rem 2rem 5rem 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 1rem;
    color: #eff7f8;
    margin-bottom: 3rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }

  button {
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Tittle = styled.h1`
  font-size: calc(1rem + vw);
  color: #fff;
  border-bottom: 2px solid var(--pink);
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  input {
    &[name="name"] {
      margin-right: 0;
    }
  }
`;
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5hz4549",
        "template_i2hd89h",
        e.target,
        "rqBN9xJBwW9PwOH9_"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <ContactSection id="contact">
      <Title>Ponte en contacto:</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/" target="__target">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com//" target="__target">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/" target="">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.whatsapp.com/" target="__target">
          <img src={WhatsApp} alt="WhatsApp" />
        </a>
      </Icons>
      <div data-aos="fade-right" data-aos-duration="2200">
        <Form onSubmit={sendEmail}>
          <Row>
            <label></label>
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              className="form-control"
            />

            <label></label>
            <input
              type="email"
              name="user_email"
              placeholder="Tu Email"
              className="form-control"
            />
          </Row>
          <textarea
            placeholder="De manera detallada describe los sucesos y en caso de ser necesario escribe una nota acerca de tu Multa"
            name="message"
            className="form-control"
          />

          <Tittle>Adjunta tu Multa</Tittle>
          <SubText>
            No te olvides que la Foto o Scan de tu archivo debe ser clara y
            nitida
          </SubText>
          <GUploader />
          <SubText>En caso de tener una notificacion subela tambien</SubText>
          <GUploader />

          <div style={{ margin: "0 auto" }}>
            <button
              type="submit"
              name="Send"
              className="form-control btn btn-primary"
            >
              Enviar!
            </button>
          </div>
        </Form>
      </div>
      <SubText>
        Al dar Click en Enviar estas aceptando el{" "}
        <form action="/Privacy" class="inline">
          <a href="/Privacy" style={{color: "Lime"}}>Aviso de Privacidad</a>
        </form>
      </SubText>
    </ContactSection>
  );
};

export default Contact;
