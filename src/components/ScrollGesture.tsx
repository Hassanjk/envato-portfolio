import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ScrollGesture = () => {
  return (
    <motion.div 
      className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/80 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.div 
        className="flex items-center gap-2"
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowRight className="w-5 h-5" />
        <span className="text-sm font-medium">Scroll horizontally</span>
      </motion.div>
      
      <motion.div 
        className="w-16 h-8 rounded-full border-2 border-white/30 relative"
        initial={{ opacity: 0.5 }}
      >
        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 left-1 w-4 h-4 bg-white rounded-full"
          animate={{
            x: [0, 28, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollGesture;