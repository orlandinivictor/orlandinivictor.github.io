import React from 'react';
import { VscGithub, VscMail } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';

import aboutMePic from '../../assets/aboutMePic.jpeg';
import { AboutMeDiv, SocialIcons, Content, Paragraph } from './styles';

const AboutMe = React.forwardRef((props, ref) => (
  <AboutMeDiv ref={ref}>
    <img src={aboutMePic} alt="Foto de Perfil" />
    <Content>
      <h1>Sobre mim</h1>
      <Paragraph>
        <p>
          Aspirante a Desenvolvedor Web, estou estudando Análise de Sistemas,
          atualmente no primeiro semestre, mas não dependendendo apenas do
          conteúdo universitário. Tenho conhecimento em HTML, CSS, JavaScript,
          Node, ExpressJS, ReactJS, e Python.
          <br />
          Sei que apesar da falta de experiência profissional, cada problema
          possui uma solução, e aqui estou para resolver cada um dos problemas
          que aparecerem durante minha jornada.
          <br />
          Apaixonado pela ciência e tecnologia, ambicioso pelo conhecimento e
          pelo futuro.
        </p>
      </Paragraph>
      <SocialIcons>
        <a
          href="https://www.linkedin.com/in/orlandinivictor/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin size={50} />
        </a>
        <a
          href="https://github.com/orlandinivictor/"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithub size={50} />
        </a>
        <a
          href="mailto:victorcintra99@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <VscMail size={50} />
        </a>
      </SocialIcons>
    </Content>
  </AboutMeDiv>
));

export default AboutMe;
