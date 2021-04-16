import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Cairo', sans-serif;
    background-color: #f0f2f9;
  }
`;

export const Container = styled.div``;

export const Nav = styled.nav`
  position: fixed;
  right: 0;
  height: 100vh;
  width: 10vw;
  border-left: 1px solid #4182ff;
  z-index: 9999;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: transparent;
    color: #4182ff;
    cursor: pointer;
    border: none;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s;

    &:hover {
      color: #0047cc;
    }
  }

  @media (min-width: 750px) {
    width: 100vw;
    height: 5vh;
    background-color: #f0f2f9;
    div {
      flex-direction: row;
      border-bottom: 1px solid #4182ff;
    }

    button {
      width: 20%;
    }
  }
`;

export const ScrollView = styled.section`
  width: 90vw;
  height: 100vh;
  overflow-y: auto;

  @media (min-width: 750px) {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
  }
`;
