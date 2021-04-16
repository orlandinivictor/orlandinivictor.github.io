import React, { Component } from 'react';
import 'intersection-observer';
import { FaUserTie, FaBookReader, FaUserCheck } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { GiDrippingStar } from 'react-icons/gi';

import GlobalStyles, {
  Container,
  Nav,
  ScrollView,
} from './styles/GlobalStyles';
import AboutMe from './components/AboutMe/index';
import Skills from './components/Skills/index';
import Portfolio from './components/Portfolio/index';
import Experience from './components/Experience/index';
import Inspirations from './components/Inspirations/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.AboutMe = React.createRef();
    this.Skills = React.createRef();
    this.Portfolio = React.createRef();
    this.Experience = React.createRef();
    this.Inspirations = React.createRef();

    this.scrollToComponent = this.scrollToComponent.bind(this);
  }

  scrollToComponent = (content) => {
    content.current.scrollIntoView({
      behavior: 'smooth',
      offset: 0,
      align: 'top',
      duration: 1000,
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyles />
        <Nav>
          <div>
            <button
              type="button"
              onClick={() => {
                this.scrollToComponent(this.AboutMe);
              }}
            >
              <FaUserTie size={30} />
            </button>
            <button
              type="button"
              onClick={() => {
                this.scrollToComponent(this.Skills);
              }}
            >
              <FaUserCheck size={30} />
            </button>
            <button
              type="button"
              onClick={() => {
                this.scrollToComponent(this.Portfolio);
              }}
            >
              <FaBookReader size={30} />
            </button>
            <button
              type="button"
              onClick={() => {
                this.scrollToComponent(this.Experience);
              }}
            >
              <MdWork size={30} />
            </button>
            <button
              type="button"
              onClick={() => {
                this.scrollToComponent(this.Inspirations);
              }}
            >
              <GiDrippingStar size={30} />
            </button>
          </div>
        </Nav>
        <ScrollView>
          <AboutMe ref={this.AboutMe} />
        </ScrollView>
        <ScrollView>
          <Skills ref={this.Skills} />
        </ScrollView>
        <ScrollView>
          <Portfolio ref={this.Portfolio} />
        </ScrollView>
        <ScrollView>
          <Experience ref={this.Experience} />
        </ScrollView>
        <ScrollView>
          <Inspirations ref={this.Inspirations} />
        </ScrollView>
      </Container>
    );
  }
}

export default App;
