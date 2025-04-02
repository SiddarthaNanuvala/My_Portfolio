'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

const CertificateModal = ({ isOpen, onClose, imageUrl, title }: CertificateModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full mx-4 bg-white rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <IoClose size={24} />
            </button>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                <motion.img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal; 