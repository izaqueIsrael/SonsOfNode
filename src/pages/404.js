import Image from 'next/image';
import Popup from '@/components/Popup';
import Navbar from '@/components/Navbar';
import error from '@/images/erro.gif';

const erro = ({ popupIsOpen, handlePopupIsOpen }) => {
  return (
    <section className="error">
      <Navbar handlePopupIsOpen={handlePopupIsOpen} />
      <Popup popupIsOpen={popupIsOpen} handlePopupIsOpen={handlePopupIsOpen} />
      <Image src={error} alt="erro 404" style={{ margin: '25%' }} />
    </section>
  );
};

export default erro;
