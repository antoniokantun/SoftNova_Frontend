import { motion } from 'framer-motion';
import { workProcess } from '../../constants/workProcess';
import { colors } from '../../constants/colors';
import ProcessStep from '../ui/ProcessStep';

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.darkGreen }}>
            Nuestro Proceso
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.darkGreen }}>
            Metodología probada para garantizar el éxito de tu proyecto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((step, index) => (
            <ProcessStep
              key={index}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;