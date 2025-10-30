import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Caffeine", "Connection", "Creativity", "Vibehaus"];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => {
        if (prev === words.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 blur-3xl"
          animate={{
            background: [
              "radial-gradient(circle, hsl(var(--neon-pink)) 0%, transparent 70%)",
              "radial-gradient(circle, hsl(var(--neon-purple)) 0%, transparent 70%)",
              "radial-gradient(circle, hsl(var(--neon-cyan)) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.h1
          key={currentWord}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.2 }}
          className="relative text-7xl md:text-9xl font-bold font-space text-gradient glow-text"
        >
          {words[currentWord]}
        </motion.h1>
      </div>
    </motion.div>
  );
};
