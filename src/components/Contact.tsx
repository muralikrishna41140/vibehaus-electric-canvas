import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Twitter } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Flowing gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(var(--neon-pink) / 0.2) 0%, hsl(var(--neon-purple) / 0.1) 50%, transparent 100%)",
            "linear-gradient(135deg, hsl(var(--neon-purple) / 0.2) 0%, hsl(var(--neon-cyan) / 0.1) 50%, transparent 100%)",
            "linear-gradient(135deg, hsl(var(--neon-cyan) / 0.2) 0%, hsl(var(--neon-pink) / 0.1) 50%, transparent 100%)",
            "linear-gradient(135deg, hsl(var(--neon-pink) / 0.2) 0%, hsl(var(--neon-purple) / 0.1) 50%, transparent 100%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center space-y-8"
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Join the Vibe
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold font-space text-gradient glow-text">
            Let's Make Something Cool Together
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Host events, collaborate, or just grab a coffee with us. We're here to fuel your creative energy.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.location.href = "mailto:danaboinamuralikrishna7@gmail.com"}
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Button>
            <Button variant="glass" size="lg">
              Book an Event
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex gap-6 justify-center pt-12"
          >
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Mail, label: "Email" },
            ].map((social, index) => (
              <motion.button
                key={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full glass-effect flex items-center justify-center group"
                style={{
                  boxShadow: "0 0 20px hsl(var(--neon-pink) / 0.2)",
                }}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-primary/20 blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-[120px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </section>
  );
};
