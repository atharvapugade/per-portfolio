"use client";

import { AnimatePresence, motion } from "framer-motion";

type PageLoaderProps = {
  loading: boolean;
};

export function PageLoader({ loading }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#020617]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="h-12 w-12 rounded-full border-2 border-indigo-400 border-t-transparent"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
