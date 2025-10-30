import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-primary/20">
      {/* Neon glow line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--neon-pink)), hsl(var(--neon-purple)), hsl(var(--neon-cyan)), transparent)",
          boxShadow: "0 0 20px hsl(var(--neon-pink))",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <motion.h3
            className="text-2xl font-bold font-space text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Vibehaus Café
          </motion.h3>
          <p className="text-muted-foreground">
            Brew. Connect. Create.
          </p>
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © 2025 Vibehaus Café — Designed with energy by{" "}
            <motion.span
              className="text-gradient font-semibold"
              whileHover={{ textShadow: "0 0 20px hsl(var(--neon-pink))" }}
            >
              Torque
            </motion.span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
