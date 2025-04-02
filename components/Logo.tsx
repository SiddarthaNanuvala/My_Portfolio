'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/#home" scroll={false}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-12 h-12 cursor-pointer"
      >
        <div className="absolute inset-0 bg-cyber-blue rounded-lg animate-cyber-pulse shadow-cyber"></div>
        <motion.div
          className="relative w-full h-full bg-cyber-dark rounded-lg flex items-center justify-center overflow-hidden border border-cyber-electric"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <motion.span
              className="text-2xl font-bold font-mono text-cyber-electric"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              SN
            </motion.span>
            <motion.div
              className="absolute -inset-1 bg-cyber-neon/20 blur-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Logo; 