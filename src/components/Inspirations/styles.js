import styled from 'styled-components';

import background from '../../assets/inspirationsBackground.jpg';

export const InspirationsDiv = styled.div`
  padding: 2rem 2rem;
  position: absolute;
  background-color: #e65000;
  height: 100%;
  width: inherit;
  overflow: auto;
`;

export const BackgroundDiv = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: inherit;
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
  color: #e6ecf7;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-align: justify;
    line-height: 1.3rem;
  }

  h2 {
    margin-top: 1rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  h3 {
    text-align: center;
    font-size: 1.1rem;
  }

  span {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: none;
      color: #e6ecf7;
      transition: all 1s;

      &:hover {
        color: #0047cc;
      }
    }
  }

  @media (max-height: 670px) {
    div {
      p {
        margin-top: 1rem;
      }
    }

    h2 {
      margin-top: 1rem;
    }

    h3 {
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 750px) {
    margin-top: 2.5rem;
  }
`;
