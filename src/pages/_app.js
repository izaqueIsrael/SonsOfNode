import React, { useState } from 'react';
import '@/styles/index.css';
import LoadingTransition from '@/components/LoadingTransition';

const App = ({ Component, pageProps }) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const handlePopupIsOpen = () => setPopupIsOpen(!popupIsOpen);

  return (
    <>
      {/* <LoadingTransition /> */}
      <Component
        {...pageProps}
        popupIsOpen={popupIsOpen}
        handlePopupIsOpen={handlePopupIsOpen}
      />
    </>
  );
};

export default App;
