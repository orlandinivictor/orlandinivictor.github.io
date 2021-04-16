import styled from 'styled-components';

export const PortfolioDiv = styled.div`
  padding: 3rem 2rem;

  p {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    color: #0047cc;
  }

  @media (min-width: 750px) {
    margin-top: 2rem;
  }
`;

export const Projects = styled.div`
  height: 30rem;
  overflow: auto;

  div {
    position: relative;
    z-index: 10;

    h2 {
      color: #0047cc;
    }

    p {
      margin-top: -0.6rem;
      font-size: 0.8rem;
    }

    img {
      margin: 1rem auto;
      display: flex;
      align-items: center;
      width: 90%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
  }
`;
