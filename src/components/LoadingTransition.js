import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function LoadingTransition() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: '100%',
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
    });
  }, [controls]); // adicione 'controls' como dependência para evitar re-execuções desnecessárias

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={controls}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className="title header__title">Sons of </h1>
      <h2 className="title header__title header__title_dark">Node</h2>
    </motion.div>
  );
}
