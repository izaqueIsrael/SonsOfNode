import { motion } from 'framer-motion';

const ZoomInComponent = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      Conteúdo do componente
    </motion.div>
  );
};

export default ZoomInComponent;
