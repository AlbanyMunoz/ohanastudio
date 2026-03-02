import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlinePhotoCamera } from "react-icons/md";

export function TransitionPage() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 300); // 0.3s
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Cámara animada */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MdOutlinePhotoCamera className="text-8xl text-gray-800" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}