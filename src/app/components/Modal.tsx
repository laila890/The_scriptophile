import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  date: string;
  category: "story" | "poem";
}

export function Modal({ isOpen, onClose, title, content, date, category }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gradient-to-b from-white to-white/80 backdrop-blur-sm p-6 border-b border-gray-200/50 z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      category === "story"
                        ? "bg-violet-100 text-violet-700"
                        : "bg-fuchsia-100 text-fuchsia-700"
                    }`}>
                      {category === "story" ? "Short Story" : "Poem"}
                    </span>
                    <h2 className="text-3xl font-bold mt-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">{date}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(85vh-160px)]">
                <div className={`prose prose-lg max-w-none ${
                  category === "poem" ? "text-center" : ""
                }`}>
                  {content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
