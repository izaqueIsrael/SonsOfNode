import { motion } from 'framer-motion';

const SlideInComponent = () => {
  return (
    <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }}>
      Conteúdo do componente
    </motion.div>
  );
};

export default SlideInComponent;
