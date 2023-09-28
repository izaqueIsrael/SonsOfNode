import Image from 'next/image';
import Popup from '@/components/Popup';
import Navbar from '@/components/Navbar';
import error from '@/images/erro.gif';
import Footer from '@/components/Footer';

const erro = ({ popupIsOpen, handlePopupIsOpen }) => {
  return (
    <>
      <section className="error">
        <Navbar handlePopupIsOpen={handlePopupIsOpen} />
        <Popup
          popupIsOpen={popupIsOpen}
          handlePopupIsOpen={handlePopupIsOpen}
        />
        <Image src={error} alt="erro 404" style={{ margin: '25%' }} />
      </section>
      <Footer />
    </>
  );
};

export default erro;
