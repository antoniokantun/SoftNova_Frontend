import React from 'react';
import { motion } from 'framer-motion';
import type { ServiceCardProps } from '../../types';
import { colors } from '../../constants/colors';

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}
      className="p-8 rounded-2xl backdrop-blur-lg bg-white/30 border border-white/20 text-center group"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
        style={{ backgroundColor: colors.orange }}
      >
        <IconComponent className="w-8 h-8 text-white" />
      </motion.div>
      
      <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkGreen }}>
        {service.title}
      </h3>
      
      <p style={{ color: colors.darkGreen }}>
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;