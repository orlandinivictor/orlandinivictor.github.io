import styled from 'styled-components';

import background from '../../assets/skillsBackground.jpeg';

export const SkillsDiv = styled.div`
  position: absolute;
  background-color: #4182ff;
  height: 100%;
  width: inherit;
  z-index: 100;
`;

export const BackgroundDiv = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url(${background});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(0.2vh);
  opacity: 0.35;
  z-index: 0;
`;

export const Content = styled.div`
  position: relative;
  color: #ffeee6;
  margin: 3rem 2rem;
  z-index: 10;
  overflow: auto;

  p {
    font-size: 1.2rem;
    text-align: justify;
  }

  h2 {
    margin-top: 1rem;
  }

  h3 {
    margin-top: 0rem;
  }

  @media (min-width: 750px) {
    margin-top: 5rem;
  }
`;

export const Skill = styled.div`
  div {
    height: 1rem;
    background-color: #ffeee6;
    border-radius: 10rem;
  }
`;
