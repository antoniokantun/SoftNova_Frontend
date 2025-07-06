import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { colors } from '../../constants/colors';
import type { BlogPost } from '../../types/index';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-2xl backdrop-blur-lg bg-white/30 border border-white/20 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm" style={{ color: colors.darkGreen }}>
          {post.date}
        </span>
        <span className="text-sm px-2 py-1 rounded-full text-white"
              style={{ backgroundColor: colors.orange }}>
          {post.readTime}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-4" style={{ color: colors.darkGreen }}>
        {post.title}
      </h3>
      
      <p className="mb-4" style={{ color: colors.darkGreen }}>
        {post.excerpt}
      </p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="text-sm font-medium flex items-center gap-2"
        style={{ color: colors.orange }}
      >
        Leer más
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export default BlogCard;