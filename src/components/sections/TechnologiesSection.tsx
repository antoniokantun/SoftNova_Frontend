import { motion } from 'framer-motion';
import { technologies } from '../../constants/technologies';
import { colors } from '../../constants/colors';

const TechnologiesSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.darkGreen }}>
            Tecnologías que Dominamos
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg backdrop-blur-lg bg-white/30 border border-white/20 text-center"
            >
              <div className="font-bold" style={{ color: colors.darkGreen }}>
                {tech.name}
              </div>
              <div className="text-sm opacity-70" style={{ color: colors.darkGreen }}>
                {tech.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;