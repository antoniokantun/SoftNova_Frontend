import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { colors } from '../../constants/colors';
import type { Testimonial } from '../../types/index';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="p-8 rounded-2xl backdrop-blur-lg bg-white/40 border border-white/30"
    >
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" style={{ color: colors.orange }} />
        ))}
      </div>
      
      <p className="mb-6 text-lg italic" style={{ color: colors.darkGreen }}>
        "{testimonial.text}"
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-bold"
             style={{ backgroundColor: colors.green }}>
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold" style={{ color: colors.darkGreen }}>
            {testimonial.name}
          </p>
          <p className="text-sm" style={{ color: colors.darkGreen }}>
            {testimonial.role} - {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;