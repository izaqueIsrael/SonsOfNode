import Image from 'next/image';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import {
  FinalAverageByYearData,
  FinalAverageByYearOptions,
  FinalAverageByAgeData,
  FinalAverageByAgeOptions,
  FinalAverageByTextsData,
  FinalAverageByTextsOptions,
  FinalAverageByMathData,
  FinalAverageByMathOptions,
  ManAndWomanNumberData,
  ManAndWomanNumberOptions,
  WomanAndManFinalAverageData,
  WomanAndManFinalAverageOptions,
  FinalMediaByListenTypeData,
  FinalMediaByListenTypeOptions,
} from '@/utils/constants';
import woman2 from '@/images/woman2.png';
import ZoomInComponent from './ZoomIn';
import FadeInComponent from './FadeIn';

export const Article = () => {
  return (
    <section className="article">
      <FadeInComponent className="article__text">
        <h2 className="title article__title">IA na Educação</h2>
      </FadeInComponent>
      <div className="article__container">
        <FadeInComponent>
          <article className="article__content_image">
            <div className="article__texts">
              <h3 className="title article__subtitle">Intrudução</h3>
              <p className="text article__text">
                Hackathon: Onde a Magia da Tecnologia Acontece! Você sabia que
                muitas funcionalidades que você adora em plataformas como o
                Facebook, como o botão &quot;curtir&quot;, nasceram em um É um
                sprint criativo intenso, onde inovação e criatividade caminham
                juntas para redefinir o futuro.
              </p>
            </div>
            <Image
              className="article__image"
              src={woman2}
              alt="woman"
              style={{ maxWidth: '50%', height: 'auto' }}
            />
          </article>
        </FadeInComponent>
        <div className="article__grafics">
          <div className="article__contents">
            <FadeInComponent>
              <article className="article__content article__grafic article_grafic_first">
                <div>
                  <h3 className="title article__subtitle">
                    Objetivo/Problemática
                  </h3>
                  <p className="text article__text">
                    Sons of Node: Campeões da Educação com IA! Acreditamos no
                    poder da Inteligência Artificial para transformar a
                    educação. Combatemos a lacuna entre o que se espera dos
                    alunos do ensino médio e o que realmente aprendem, alinhado
                    à Base Nacional Comum Curricular.
                  </p>
                </div>
              </article>
            </FadeInComponent>
            <FadeInComponent>
              <article className="article__content article__grafic">
                <div>
                  <h3 className="title article__subtitle">
                    Materiais e Métodos
                  </h3>
                  <p className="text article__text">
                    IA + Educação: Uma Combinação Poderosa! Usamos os dados mais
                    recentes do ENEM, 2022, para criar uma análise que ilumina
                    as áreas mais críticas da educação média brasileira.
                    Queremos elevar o patamar da educação no Brasil!
                  </p>
                </div>
              </article>
            </FadeInComponent>
            <FadeInComponent>
              <article className="article__content article__grafic">
                <div>
                  <h3 className="title article__subtitle">O Produto</h3>
                  <p className="text article__text">
                    O Raio-X do Desempenho Escolar no Brasil! Mergulhamos fundo
                    nos dados do ENEM para entender como nossos estudantes estão
                    performando. Mas não para por aí! Desenvolvemos uma prova
                    dinâmica, impulsionada pela IA, que ao ser concluída, revela
                    instantaneamente um relatório detalhado sobre os pontos que
                    o aluno precisa se fortalecer. É personalização no próximo
                    nível!
                  </p>
                </div>
              </article>
            </FadeInComponent>

            <FadeInComponent>
              <article className="article__content article__grafic">
                <div>
                  <h3 className="title article__subtitle">
                    Quais dados possuímos?
                  </h3>
                  <p className="text article__text">
                    Conhecendo Nossos Estudantes! Os dados do ENEM nos dão uma
                    visão completa: desde o background sociocultural do aluno
                    até sua performance acadêmica. Tudo para oferecer insights
                    precisos e ações direcionadas.
                  </p>
                </div>
              </article>
            </FadeInComponent>
            <FadeInComponent>
              <article className="article__content article__grafic">
                <div>
                  <h3 className="title article__subtitle">O que fizemos?</h3>
                  <p className="text article__text">
                    Da Bagunça à Clareza: Limpeza de Dados! Lidamos com um
                    oceano de informações, removendo ruídos e focando no
                    essencial. O resultado? Uma análise exploratória precisa que
                    destila os principais insights.
                  </p>
                </div>
              </article>
            </FadeInComponent>
            <FadeInComponent>
              <article className="article__content article__grafic">
                <div>
                  <h3 className="title article__subtitle">
                    Análise exploratória dos dados
                  </h3>
                  <p className="text article__text">
                    Onde os Números Contam Uma História! Nos aprofundamos nos
                    dados, descobrindo padrões e tendências que ilustram a
                    jornada educacional dos estudantes brasileiros. Cada
                    gráfico, cada número, conta uma parte da história.
                  </p>
                </div>
              </article>
            </FadeInComponent>
          </div>

          <div className="barchart">
            <FadeInComponent>
              <div>
                <h3 className="subtitle article__subtitle">
                  Média FInal em relação à Ano de Conclusão do EM
                </h3>
                <BarChart
                  data={FinalAverageByYearData}
                  options={FinalAverageByYearOptions}
                />
                <p className="text article__text">
                  Neste gráfico, desvendamos as histórias por trás de 20.000
                  médias finais, traçando um caminho desde a formatura no ensino
                  médio. Vamos começar com o Grupo 1, os formandos de 2021, que
                  possuem uma média sólida de 402.7. Após apenas 3 anos, essa
                  média despenca para cerca de 335.2, uma queda de cerca de
                  16,7%. Após uma década, a média desce para 285.4, resultando
                  em uma incrível queda de cerca de 29%.
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div>
                <h3 className="subtitle article__subtitle">
                  Média Final em relação à idade
                </h3>
                <BarChart
                  data={FinalAverageByAgeData}
                  options={FinalAverageByAgeOptions}
                />
                <p className="text article__text">
                  De forma surpreendente quem é do grupo 1 de idade (menos de 17
                  anos) tem uma vantagem de média das notas em relação a quem
                  tem 17 anos. Claramente conforme o tempo passa o conhecimento
                  é dissipado, atingindo seu menor ponto no grupo 12 (entre 31 e
                  35 anos). Uma percepção no mínimo curiosa que podemos tirar
                  deste gráfico também, é que quem é do grupo 18 (entre 61 e 65)
                  tem uma média maior do que quem é do grupo 6 (21 anos de
                  idade) em diante, aparentemente uma explicação lógica para
                  este dado seria dizer que quem tem uma idade mais avançada
                  está mais comprometido em estudar em comparação aos que saíram
                  do ensino médio, mas acreditam ainda ter conhecimento o
                  suficiente para a prova.
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div>
                <h3 className="subtitle article__subtitle">
                  Média Final em relação à Redação
                </h3>
                <LineChart
                  data={FinalAverageByTextsData}
                  options={FinalAverageByTextsOptions}
                />
                <p className="text article__text">
                  Para esse gráfico pegamos 20mil alunos aleatórios que não
                  tinham nota zerada de qualquer matéria, separamos em grupos de
                  notas por matemática e redação e fizemos um gráfico de linha
                  para analisar a correlação do aumento da nota de matemática e
                  redação com o aumento da média final.
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div>
                <h3 className="subtitle article__subtitle">
                  Média Final em relação à Matemática
                </h3>
                <LineChart
                  data={FinalAverageByMathData}
                  options={FinalAverageByMathOptions}
                />
                <p className="text article__text">
                  Há uma clara relação entre o aumento das notas e a média
                  final, porém a correlação de todos da prova de matemática e a
                  média final (0.95) é maior do que a da redação com a média
                  final (0.93), então ao ficar na dúvida entre números ou
                  letras, vá nos números a maioria das vezes.
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div className="chart__container">
                <div className="chart__content">
                  <div className="chart__contents">
                    <h3 className="subtitle article__subtitle">
                      Quantidade de Homens x Mulheres no ENEM em Milhões
                    </h3>
                    <PieChart
                      data={ManAndWomanNumberData}
                      options={ManAndWomanNumberOptions}
                    />
                  </div>
                  <div className="chart__contents">
                    <h3 className="subtitle article__subtitle">
                      Quantidade de Homens x Mulheres no ENEM em Milhões
                    </h3>
                    <PieChart
                      data={WomanAndManFinalAverageData}
                      options={WomanAndManFinalAverageOptions}
                    />
                  </div>
                </div>
                <p className="text article__text">
                  Mulheres participam em 61.1% das cadeiras do ENEM em dias de
                  prova. Percebe-se uma dominância em relação a inscrição. Porém
                  a dominância acontece apenas em quantidade, mas não em
                  qualidade, pois este gráfico mostra a igualdade de
                  conhecimento entre gêneros.
                </p>
              </div>
            </FadeInComponent>
          </div>
          <FadeInComponent>
            <div>
              <h3 className="subtitle article__subtitle">
                Média final x Tipo de Ensino
              </h3>
              <div className="chat__content chart__containers">
                <PieChart
                  data={FinalMediaByListenTypeData}
                  options={FinalMediaByListenTypeOptions}
                />
              </div>
              <p className="text article__text chart__containers">
                Como era de se esperar, os dados revelam uma diferença
                significativa nas médias entre o ensino regular e o ensino
                especial, com uma margem impressionante de mais de 100 pontos de
                de diferença.
              </p>
            </div>
          </FadeInComponent>
          <article className="article__content article__grafic article_final">
            <FadeInComponent>
              <div>
                <h3 className="title article__subtitle">
                  Resultados e Conclusões
                </h3>
                <p className="text article__text">
                  Decifrando o Código da Educação! Com nossa análise, abrimos o
                  livro sobre o que realmente acontece nas salas de aula do
                  Brasil. As conclusões nos orientam sobre os próximos passos,
                  com o objetivo final de melhorar a trajetória educacional de
                  cada aluno no Brasil.
                </p>
              </div>
            </FadeInComponent>
            <FadeInComponent>
              <div>
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
              </div>
            </FadeInComponent>
          </article>
        </div>
      </div>
    </section>
  );
};
