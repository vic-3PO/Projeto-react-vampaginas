import React from "react";
import styled from "styled-components";
import { Titulo } from "../Titulo";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.alternate ? "row-reverse" : "row")};
  padding: 40px;
  background-color: ${(props) =>
    props.alternate ? "var(--color-background-2)" : "#44475a"};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  max-width: 800px;
  text-align: ${(props) => (props.alternate ? "right" : "left")};
  color: #ccc; /* Default text color for light gray */

  h2 {
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
    word-wrap: break-word;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
  }
`;

function SobreNos() {
  return (
    <div>
      <Titulo>
        Sobre Nós - Vampáginas: Uma Jornada pelo Conhecimento Aberto
      </Titulo>
      <Section>
        <Content>
          <h2>Propósito do Vampáginas</h2>
          <p>
            O Vampáginas nasceu da convicção de que o acesso à informação é um
            direito fundamental. Nosso propósito é democratizar o conhecimento,
            oferecendo um vasto acervo de obras de domínio público para atingir
            o máximo de pessoas, proporcionando um portal acessível e
            enriquecedor.
          </p>
        </Content>
      </Section>

      <Section alternate>
        <Content alternate>
          <h2>Seleção de Obras</h2>
          <p>
            Todas as obras apresentadas no Vampáginas são cuidadosamente
            selecionadas, sendo exclusivamente de domínio público. Este critério
            garante que nossa biblioteca ofereça uma variedade rica de conteúdo
            cultural sem restrições legais, permitindo que os usuários explorem
            livremente o universo do conhecimento.
          </p>
        </Content>
      </Section>

      <Section>
        <Content>
          <h2>Contribuições dos Usuários:</h2>
          <p>
            Estamos em constante evolução, e o envolvimento da comunidade é
            vital. No momento, trabalhamos para permitir que os usuários sugiram
            obras e participem ativamente do crescimento do Vampáginas. Além
            disso, exploramos a possibilidade de aceitar doações e contribuições
            da comunidade, um passo que fortalecerá ainda mais nossa missão.
          </p>
        </Content>
      </Section>

      <Section alternate>
        <Content alternate>
          <h2>Importância da Preservação:</h2>
          <p>
            Acreditamos que disponibilizar obras de domínio público é crucial
            para preservar a diversidade cultural e histórica. Ao fazer isso, o
            Vampáginas contribui para a preservação da riqueza cultural da
            humanidade, garantindo que as futuras gerações tenham acesso a um
            legado valioso.
          </p>
        </Content>
      </Section>

      <Section>
        <Content>
          <h2>Apoio à Educação e Cultura:</h2>
          <p>
            O Vampáginas é uma ferramenta valiosa para educadores, estudantes e
            entusiastas culturais. Educadores podem enriquecer seus materiais de
            ensino, enquanto estudantes têm acesso a recursos valiosos para
            pesquisa e aprendizado. Entusiastas culturais podem explorar obras
            clássicas, descobrindo novas perspectivas sobre história e cultura.
          </p>
        </Content>
      </Section>

      <Section alternate>
        <Content alternate>
          <h2>Contato com a Equipe:</h2>
          <p>
            Estamos em processo de implementar maneiras eficazes para os
            usuários entrarem em contato conosco. Em breve, teremos canais
            específicos para receber feedback, sugestões e esclarecer dúvidas.
            Sua participação é essencial para aprimorar continuamente a
            experiência no Vampáginas. Agradecemos antecipadamente pelo seu
            interesse e envolvimento.
          </p>
        </Content>
      </Section>
    </div>
  );
}

export default SobreNos;
