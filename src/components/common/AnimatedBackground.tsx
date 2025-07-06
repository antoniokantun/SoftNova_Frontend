import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { colors } from '../../constants/colors';

interface AnimatedBackgroundProps {
  y1: MotionValue<number>;
  y2: MotionValue<number>;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Círculo verde animado */}
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -360],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-3/4 right-1/3 w-12 h-12 rounded-full opacity-20"
        style={{ backgroundColor: colors.green }}
      />
      
      {/* Círculo naranja animado */}
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full opacity-25"
        style={{ backgroundColor: colors.orange }}
      />
      
      {/* Círculo verde adicional */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-1/3 left-1/2 w-10 h-10 rounded-full opacity-30"
        style={{ backgroundColor: colors.green }}
      />
      
      {/* Círculo naranja adicional */}
      <motion.div
        animate={{ 
          y: [0, 35, 0],
          rotate: [0, -180],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
        className="absolute top-1/2 right-1/4 w-14 h-14 rounded-full opacity-15"
        style={{ backgroundColor: colors.orange }}
      />
    </div>
  );
};

export default AnimatedBackground;