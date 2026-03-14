"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "@/lib/motion";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay, duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
