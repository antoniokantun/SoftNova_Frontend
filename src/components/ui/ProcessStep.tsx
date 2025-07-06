import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../constants/colors';
import type { WorkProcessStep } from '../../types/index';

interface ProcessStepProps {
  step: WorkProcessStep;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="text-center relative"
    >
      <div className="relative mb-6">
        <div className="text-6xl font-bold opacity-20" style={{ color: colors.green }}>
          {step.step}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
               style={{ backgroundColor: colors.orange }}>
            {step.step}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkGreen }}>
        {step.title}
      </h3>
      
      <p style={{ color: colors.darkGreen }}>
        {step.description}
      </p>
    </motion.div>
  );
};

export default ProcessStep;