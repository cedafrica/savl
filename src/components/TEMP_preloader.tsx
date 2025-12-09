import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ loading }: { loading: boolean }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/favicon.svg"
            alt="loading"
            className="w-60 h-60"
            animate={{
              opacity: [0.3, 1, 0.3],
              filter: ["blur(6px)", "blur(0px)", "blur(6px)"],
              scale: [0.92, 1.05, 0.92],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
