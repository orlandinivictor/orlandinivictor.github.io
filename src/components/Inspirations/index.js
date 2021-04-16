import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import { InspirationsDiv, BackgroundDiv, Content } from './styles';

const Inspirations = React.forwardRef((props, ref) => (
  <InspirationsDiv ref={ref}>
    <BackgroundDiv />
    <Content>
      <h1>Inspirações</h1>

      <div>
        <p>
          &quot;– Meri, você sabe nadar? <br /> – Não, mas eu sei
          aprender.&quot;
        </p>
        <h4> - Meri, 2 anos de idade </h4>
      </div>

      <div>
        <p>
          &quot;Todo mundo é um gênio. Mas, se você julgar um peixe por sua
          capacidade de subir em uma árvore, ele vai gastar toda a sua vida
          acreditando que é estúpido.”
        </p>
        <h4> - Albert Einstein </h4>
      </div>

      <div>
        <p>
          &quot;Eu tentei 99 vezes e falhei, mas na centésima tentativa eu
          consegui, nunca desista de seus objetivos mesmo que esses pareçam
          impossíveis, a próxima tentativa pode ser a vitoriosa.&quot;
        </p>
        <h4> - Albert Einstein </h4>
      </div>

      <h2>Obrigado pela Visita!!</h2>
      <h3>Não se esqueça de me seguir: </h3>
      <span>
        <a
          href="https://www.linkedin.com/in/orlandinivictor/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={50} />
        </a>
        <a
          href="https://github.com/orlandinivictor"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare size={50} />
        </a>
      </span>
    </Content>
  </InspirationsDiv>
));

export default Inspirations;
