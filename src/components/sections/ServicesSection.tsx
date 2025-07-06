import { motion } from 'framer-motion';
import { mainServices, additionalServices } from '../../constants/services';
import { colors } from '../../constants/colors';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.darkGreen }}>
            Nuestros Servicios
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.darkGreen }}>
            Ofrecemos soluciones completas de desarrollo de software y consultoría tecnológica para empresas de todos los tamaños
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              variant="main"
            />
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: colors.darkGreen }}>
            Servicios Adicionales
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              variant="additional"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;