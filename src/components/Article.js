import BarChart from './BarChart';
import { barData, barOptions, pieData, pieOptions, lineData, lineOptions, trendData, trendOptions } from '@/utils/constants';

export const Article = () => {
  return (
    <section className="article">
      <h2 className="title article__title">IA na Educação</h2>
      <div className="article__container">
        <article>
          <h3 className="title article__subtitle">Intrudução</h3>
          <p className="text article__text">
            Hackathon: Onde a Magia da Tecnologia Acontece! Você sabia que
            muitas funcionalidades que você adora em plataformas como o
            Facebook, como o botão "curtir", nasceram em um Hackathon? É um
            sprint criativo intenso, onde inovação e criatividade caminham
            juntas para redefinir o futuro.
          </p>
        </article>
        <article>
          <h3 className="title article__subtitle">Objetivo/Problemática</h3>
          <p className="text article__text">
            Sons of Node: Campeões da Educação com IA! Acreditamos no poder da
            Inteligência Artificial para transformar a educação. Combatemos a
            lacuna entre o que se espera dos alunos do ensino médio e o que
            realmente aprendem, alinhado à Base Nacional Comum Curricular.
          </p>
        </article>
        <article>
          <h3 className="title article__subtitle">O Produto</h3>
          <p className="text article__text">
            O Raio-X do Desempenho Escolar no Brasil! Mergulhamos fundo nos
            dados do ENEM para entender como nossos estudantes estão
            performando. Mas não para por aí! Desenvolvemos uma prova dinâmica,
            impulsionada pela IA, que ao ser concluída, revela instantaneamente
            um relatório detalhado sobre os pontos que o aluno precisa se
            fortalecer. É personalização no próximo nível!
          </p>
          <BarChart data={barData} options={barOptions} />
        </article>
        <article>
          <h3 className="title article__subtitle">Quais dados possuímos?</h3>
          <p className="text article__text">
            Conhecendo Nossos Estudantes! Os dados do ENEM nos dão uma visão
            completa: desde o background sociocultural do aluno até sua
            performance acadêmica. Tudo para oferecer insights precisos e ações
            direcionadas.
          </p>
          <BarChart data={pieData} options={pieOptions} />
        </article>
        <article>
          <h3 className="title article__subtitle">O que fizemos?</h3>
          <p className="text article__text">
            Da Bagunça à Clareza: Limpeza de Dados! Lidamos com um oceano de
            informações, removendo ruídos e focando no essencial. O resultado?
            Uma análise exploratória precisa que destila os principais insights.
          </p>
          <BarChart data={lineData} options={lineOptions} />
        </article>
        <article>
          <h3 className="title article__subtitle">Materiais e Métodos</h3>
          <p className="text article__text">
            IA + Educação: Uma Combinação Poderosa! Usamos os dados mais
            recentes do ENEM, 2022, para criar uma análise que ilumina as áreas
            mais críticas da educação média brasileira. Queremos elevar o
            patamar da educação no Brasil!
          </p>
        </article>

        <article>
          <h3 className="title article__subtitle">
            Análise exploratória dos dados
          </h3>
          <p className="text article__text">
            Onde os Números Contam Uma História! Nos aprofundamos nos dados,
            descobrindo padrões e tendências que ilustram a jornada educacional
            dos estudantes brasileiros. Cada gráfico, cada número, conta uma
            parte da história.
          </p>
          <BarChart data={trendData} options={trendOptions} />
        </article>

        <article>
          <h3 className="title article__subtitle">Resultados e Conclusões</h3>
          <p className="text article__text">
            Decifrando o Código da Educação! Com nossa análise, abrimos o livro
            sobre o que realmente acontece nas salas de aula do Brasil. As
            conclusões nos orientam sobre os próximos passos, com o objetivo
            final de melhorar a trajetória educacional de cada aluno no Brasil.
          </p>
        </article>

        <article>
          <h3 className="title article__subtitle">Referências</h3>
          <ul>
            <li className="text article__text">
              <a
                className="link text"
                href="https://www.techtudo.com.br/noticias/2014/01/sete-ideias-do-facebook-que-viraram-produtos-em-hackathons-de-2013.ghtml"
              >
                TechTudo: Ideias do Facebook em Hackathons de 2013
              </a>
            </li>
            <li className="text article__text">
              <a
                className="link text"
                href="https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/enem"
              >
                Dados abertos ENEM
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
