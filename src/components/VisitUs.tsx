import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VisitUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, hsl(var(--neon-pink) / 0.1), transparent 50%)",
            "radial-gradient(circle at 100% 100%, hsl(var(--neon-cyan) / 0.1), transparent 50%)",
            "radial-gradient(circle at 0% 0%, hsl(var(--neon-pink) / 0.1), transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Location
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold font-space text-gradient mb-4">
            Come Vibe With Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Map placeholder with animated pin */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-2xl overflow-hidden glass-effect p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
            <div className="relative h-full flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center"
              >
                <MapPin className="w-24 h-24 mx-auto mb-4 text-accent" style={{
                  filter: "drop-shadow(0 0 20px hsl(var(--neon-cyan)))",
                }} />
                <p className="text-2xl font-bold font-space text-gradient">
                  Hitech City, Hyderabad
                </p>
              </motion.div>

              {/* Pulsing circles */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-40 h-40 border-2 border-accent rounded-full" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <div className="w-40 h-40 border-2 border-primary rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 rounded-xl glass-effect"
              >
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Hitech City, Hyderabad<br />
                    Telangana, India
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 rounded-xl glass-effect"
              >
                <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Mon - Fri: 8am - 11pm<br />
                    Sat - Sun: 9am - Midnight
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 rounded-xl glass-effect"
              >
                <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    +91 (555) 123-4567<br />
                    hello@vibehaus.cafe
                  </p>
                </div>
              </motion.div>
            </div>

            <Button
              variant="cyan"
              size="lg"
              className="w-full"
              onClick={() => window.open("https://maps.google.com/?q=Hitech+City+Hyderabad", "_blank")}
            >
              Get Directions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
