import styled from 'styled-components';

export const AboutMeDiv = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 15rem;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;

export const Content = styled.div`
  background-color: white;
  display: flex;
  height: 33rem;
  flex-direction: column;
  justify-content: center;
  margin-top: -8rem;
  padding: 10rem 2rem 0 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    color: #0047cc;
  }

  @media (min-width: 750px) {
    height: calc(100vh - 15rem);
  }
`;

export const Paragraph = styled.div`
  height: 18rem;
  overflow: auto;
  margin-top: 1rem;
  p {
    text-align: justify;
    line-height: 1.3rem;
  }
`;

export const SocialIcons = styled.div`
  position: relative;
  top: 1.7rem;
  left: calc(100% - 9rem);

  a {
    text-decoration: none;
    color: #4182ff;
    transition: all 1s;

    &:hover {
      color: #0047cc;
    }
  }
`;
