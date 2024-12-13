import { motion } from 'framer-motion';

function AnimatedTitle() {
  return (
    <motion.h1
      className="text-5xl font-bold"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Merry Christmas!
    </motion.h1>
  );
}
