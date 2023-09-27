import Navbar from '@/components/Navbar';
import { Header } from '@/components/Header';
import { Article } from '@/components/Article';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import Test from '@/components/Test';

const Home = ({ popupIsOpen, handlePopupIsOpen }) => {
  return (
    <>
      <Navbar handlePopupIsOpen={handlePopupIsOpen} />
      <Popup popupIsOpen={popupIsOpen} handlePopupIsOpen={handlePopupIsOpen} />
      <Header />
      <Article />
      <Footer />
      <Test />
    </>
  );
};

export default Home;
