import styled from 'styled-components';

import background from '../../assets/experienceBackground.png';

export const ExperienceDiv = styled.div`
  position: absolute;
  height: 100%;
  width: inherit;
  padding: 3rem 2rem;
  background-color: #0047cc;
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
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);

  p {
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: justify;
    color: #ffc5ab;
  }

  h3 {
    margin-top: 2rem;
    line-height: 1.4rem;
  }

  @media (min-width: 750px) {
    margin-top: 3rem;
  }
`;
