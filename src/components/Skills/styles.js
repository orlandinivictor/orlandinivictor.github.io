import styled from 'styled-components';

import background from '../../assets/skillsBackground.jpeg';

export const SkillsDiv = styled.div`
  position: absolute;
  background-color: #0047cc;
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
  filter: blur(0.8vh);
  opacity: 0.25;
  z-index: 0;
`;

export const Content = styled.div`
  position: relative;
  color: #ff9463;
  margin: 2rem 2rem;
  z-index: 10;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);

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
    margin-top: 2.5rem;

    div:first-of-type h3 {
      margin-top: -0.5rem;
    }
  }
`;

export const Skill = styled.div`
  div {
    height: 1rem;
    background-color: #ffc5ab;
    border-radius: 10rem;
  }
`;
