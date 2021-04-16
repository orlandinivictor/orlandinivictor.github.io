import React from 'react';

import projectClonefy from '../../assets/projectClonefy.png';
import projectScholarAdmin from '../../assets/projectScholarAdmin.png';
import { PortfolioDiv, Projects } from './styles';

const Porfolio = React.forwardRef((props, ref) => (
  <PortfolioDiv ref={ref}>
    <h1>Meu Portfólio</h1>
    <p>
      Por enquanto é baseado apenas em alguns projetos pessoais, mas quem sabe
      os próximos que estarão aqui não serão suas idéias, ou de sua empresa!
    </p>

    <Projects>
      <div>
        <h2>Clonefy</h2>
        <p>Clone da Landing Page do Spotify para Web.</p>
        <img src={projectClonefy} alt="Clonefy" />
      </div>
      <div>
        <h2>ScholarAdmin</h2>
        <p>
          Consumo de uma API-REST para o CRUD de o que seria o sistema de uma
          Escola
        </p>
        <img src={projectScholarAdmin} alt="ScholarAdmin" />
      </div>
    </Projects>
  </PortfolioDiv>
));

export default Porfolio;
