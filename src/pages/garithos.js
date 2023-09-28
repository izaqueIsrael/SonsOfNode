import Image from 'next/image';
import Popup from '@/components/Popup';
import Navbar from '@/components/Navbar';
import garithos from '@/images/garithos.webp';

const GarithosTribute = ({ popupIsOpen, handlePopupIsOpen }) => {
  return (
    <section className="garithos">
      <Navbar handlePopupIsOpen={handlePopupIsOpen} />
      <Popup popupIsOpen={popupIsOpen} handlePopupIsOpen={handlePopupIsOpen} />
      <div className="garithos__container">
        <h1 className="title article__title">
          Homenagem ao Grande Marshal Othmar Garithos
        </h1>
        <p className="text test__text">
          Othmar Garithos foi um bravo líder humano, cujo legado vive até hoje.
          Embora suas decisões possam ter sido questionadas, seu valor e
          compromisso com seu povo nunca podem ser negados.
        </p>
        <Image src={garithos} alt="The Grand Marshal Othmar Garithos" />
      </div>
    </section>
  );
};

export default GarithosTribute;
