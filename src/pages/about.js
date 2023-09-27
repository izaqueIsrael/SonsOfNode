import { Header } from '@/components/Header';
import Popup from '@/components/Popup';
import Navbar from '@/components/Navbar';

const about = ({ popupIsOpen, handlePopupIsOpen }) => {
  return (
    <>
      <Navbar handlePopupIsOpen={handlePopupIsOpen} />
      <Popup popupIsOpen={popupIsOpen} handlePopupIsOpen={handlePopupIsOpen} />
      <Header />
      <h1>Abossutssssss</h1>
    </>
  );
};

export default about;
