import React from 'react';

import { ExperienceDiv, BackgroundDiv, Content } from './styles';

const Experience = React.forwardRef((props, ref) => (
  <ExperienceDiv id="experience" ref={ref}>
    <BackgroundDiv />
    <Content>
      <h1>Experiênia Profissional</h1>
      <h3>Violeta Decoração &amp; Design</h3>
      <span>
        <b>2014 - 2020 -&gt; Ajudante Geral</b>
      </span>
      <p>
        Prestação de serviços autônomo com instalação de papel de parede,
        atendimento ao cliente, envio e recebimento de e-mails, atendimento
        telefônico e efetivação de vendas. Suporte nas vendas de e-commerce
        através de marketplace grupo Extra, follow up de pedidos, empacotamento
        e despacho de pedidos, atendimento ao cliente via sistema.
      </p>

      <h3>Quer me ajudar a preencher essa página?</h3>
      <span>
        <b>2021 - &infin; -&gt; Seu funcionário</b>
      </span>
      <p>Estarei aguardando ansiosamente o seu contato!!</p>
    </Content>
  </ExperienceDiv>
));

export default Experience;
