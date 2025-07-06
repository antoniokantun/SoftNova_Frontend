import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { colors } from '../../constants/colors';
import AnimatedBackground from '../common/AnimatedBackground';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground y1={y1} y2={y2} />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ opacity }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r"
            style={{ 
              backgroundImage: `linear-gradient(45deg, ${colors.darkGreen}, ${colors.green}, ${colors.orange})` 
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            SoftNova
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto"
            style={{ color: colors.darkGreen }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Especialistas en desarrollo de software, consultoría tecnológica y transformación digital
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80"
            style={{ color: colors.darkGreen }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Convertimos tus ideas en soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all shadow-lg hover:shadow-2xl flex items-center gap-2"
              style={{ backgroundColor: colors.orange }}
            >
              Comenzar Proyecto
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all hover:bg-white/10"
              style={{ 
                color: colors.darkGreen,
                borderColor: colors.darkGreen
              }}
            >
              Ver Portafolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8" style={{ color: colors.darkGreen }} />
      </motion.div>
    </section>
  );
};

export default HeroSection;