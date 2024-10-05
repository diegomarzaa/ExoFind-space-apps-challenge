import { motion } from 'framer-motion';

export default function Slide1() {
  return (
    <div className="slide-container">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl font-bold text-white mb-12"
      >
        ODISEA ESTELAR - Slide 1
      </motion.h1>
    </div>
  );
}
