import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description: string;
}

export function PhotoModal({ isOpen, onClose, imageSrc, title, description }: PhotoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <motion.img
                src={imageSrc}
                alt={title}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                layoutId={`photo-${imageSrc}`}
              />
              
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-['Dancing_Script'] text-[2.5rem] text-[#D4AF37] mb-2">
                  {title}
                </h3>
                <p className="font-['Crimson_Text'] text-[1.2rem] text-[#FFFDF7]/80">
                  {description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
