import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { colors } from '../../constants/colors';

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          const servicesSection = document.getElementById('servicios');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-sm mb-2 opacity-70" style={{ color: colors.darkGreen }}>
          Desliza hacia abajo
        </span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
        >
          <ChevronDown className="w-6 h-6" style={{ color: colors.darkGreen }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;