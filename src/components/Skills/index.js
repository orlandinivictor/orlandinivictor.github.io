import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { SkillsDiv, BackgroundDiv, Content, Skill } from './styles';

const Skills = React.forwardRef((props, ref) => (
  <SkillsDiv ref={ref}>
    <BackgroundDiv />
    <Content>
      <h1>SKILLS</h1>
      <p>Um pouco sobre minhas Soft Skills e Hard Skills.</p>

      <h2>SOFT SKILLS</h2>
      <div>
        <h3>
          Comprometimento <FaCheck />
        </h3>
        <h3>
          Constância <FaCheck />
        </h3>
        <h3>
          Disposição <FaCheck />
        </h3>
        <h3>
          Pontualidade <FaCheck />
        </h3>
      </div>
      <div>
        <h2>HARD SKILLS</h2>
        <Skill>
          <h3>HTML</h3>
          <div style={{ width: '72%' }} />
        </Skill>
        <Skill>
          <h3>CSS</h3>
          <div style={{ width: '86%' }} />
        </Skill>
        <Skill>
          <h3>JavaScript</h3>
          <div style={{ width: '79%' }} />
        </Skill>
        <Skill>
          <h3>React</h3>
          <div style={{ width: '64%' }} />
        </Skill>
        <Skill>
          <h3>Python</h3>
          <div style={{ width: '48%' }} />
        </Skill>
      </div>
    </Content>
  </SkillsDiv>
));

export default Skills;
