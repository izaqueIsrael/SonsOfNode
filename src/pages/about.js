import Popup from '@/components/Popup';
import Navbar from '@/components/Navbar';

const about = ({ popupIsOpen, handlePopupIsOpen }) => {
  return (
    <section className="about">
      <Navbar handlePopupIsOpen={handlePopupIsOpen} />
      <Popup popupIsOpen={popupIsOpen} handlePopupIsOpen={handlePopupIsOpen} />
      <div className="about__container">
        <h1 className="title article__title about__title">Sobre Nós</h1>
        <p className="text article__text">
          No coração da tecnologia e inovação, a Sons of Node surgiu como uma
          solução para os desafios modernos da educação. Vivemos em uma era de
          rápida transformação e, com ela, a necessidade de abordagens
          educacionais que atendam às demandas atuais. Ao combinar paixão,
          inteligência artificial e análise de dados, buscamos entender,
          melhorar e revolucionar o panorama educacional brasileiro.
        </p>

        <h2 className="title article__title about__title">Nossa Missão</h2>
        <h3 className="text article__text">
          Iluminar o Caminho da Educação com a Chama da Tecnologia.
        </h3>
        <p className="text article__text">
          Acreditamos que cada aluno é único e merece uma educação que reconheça
          e atenda às suas necessidades individuais. Por isso, mergulhamos fundo
          nos dados para entender onde estão os desafios e as oportunidades.
          Nossa missão é usar a tecnologia, especialmente a Inteligência
          Artificial, para moldar soluções educacionais que não apenas preencham
          lacunas, mas também inspirem e capacitem a próxima geração.
        </p>
      </div>
    </section>
  );
};

export default about;
