import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Gradient accent */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary mb-4"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold font-space text-gradient">
              More Than Coffee
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Vibehaus, we craft more than coffee — we create moments. A place for thinkers, creators, and night owls to gather, connect, and bring their ideas to life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our space pulses with creative energy, where every corner is designed to inspire and every drink is crafted to fuel your passion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass-effect p-8">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
                animate={{
                  background: [
                    "linear-gradient(135deg, hsl(var(--neon-pink) / 0.2), hsl(var(--neon-cyan) / 0.2))",
                    "linear-gradient(135deg, hsl(var(--neon-purple) / 0.2), hsl(var(--neon-pink) / 0.2))",
                    "linear-gradient(135deg, hsl(var(--neon-cyan) / 0.2), hsl(var(--neon-purple) / 0.2))",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="relative h-full flex flex-col justify-center items-center text-center space-y-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-7xl"
                >
                  ⚡
                </motion.div>
                <h3 className="text-3xl font-bold font-space text-foreground">
                  Brew. Connect. Create.
                </h3>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
