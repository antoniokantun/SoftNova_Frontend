import { motion } from 'framer-motion';
import { colors } from '../../constants/colors';
import ContactForm from '../ui/ContactForm';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.darkGreen }}>
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl" style={{ color: colors.darkGreen }}>
            Estamos listos para convertir tus ideas en realidad tecnológica
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/40 rounded-3xl p-8 border border-white/30"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;