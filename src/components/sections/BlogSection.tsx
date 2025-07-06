import { motion } from 'framer-motion';
import { blogPosts } from '../../constants/blogPosts';
import { colors } from '../../constants/colors';
import BlogCard from '../ui/BlogCard';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.darkGreen }}>
            Blog y Recursos
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.darkGreen }}>
            Mantente actualizado con las últimas tendencias en tecnología
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;