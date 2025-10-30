import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cafeVibes from "@/assets/cafe-vibes.jpg";
import liveSessions from "@/assets/live-sessions.jpg";
import creativeZone from "@/assets/creative-zone.jpg";

const experiences = [
  {
    title: "Café Vibes",
    description: "Relax in our neon-lit space designed for connection and inspiration",
    image: cafeVibes,
    color: "hsl(var(--neon-purple))",
  },
  {
    title: "Live Sessions",
    description: "Experience electric performances and creative showcases",
    image: liveSessions,
    color: "hsl(var(--neon-cyan))",
  },
  {
    title: "Creative Zone",
    description: "Collaborate, create, and bring your wildest ideas to life",
    image: creativeZone,
    color: "hsl(var(--neon-pink))",
  },
];

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-primary/50 text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            The Experience
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold font-space text-gradient">
            Immerse Yourself
          </h2>
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                <motion.div
                  className={`space-y-6 ${isEven ? "" : "md:col-start-2"}`}
                  whileHover={{ x: isEven ? 10 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold font-space text-gradient">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <motion.div
                    className="w-20 h-1 rounded-full"
                    style={{
                      background: exp.color,
                      boxShadow: `0 0 20px ${exp.color}`,
                    }}
                    whileHover={{ width: 100 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.div
                  className={`relative ${isEven ? "" : "md:col-start-1 md:row-start-1"}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{
                        boxShadow: `0 0 60px ${exp.color}`,
                      }}
                    >
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </motion.div>

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 border-2 rounded-2xl"
                      style={{ borderColor: exp.color }}
                      animate={{
                        boxShadow: [
                          `0 0 20px ${exp.color}40`,
                          `0 0 40px ${exp.color}80`,
                          `0 0 20px ${exp.color}40`,
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>

                  {/* Floating accent */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-50"
                    style={{ background: exp.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [
              "radial-gradient(circle at 10% 20%, hsl(var(--neon-purple) / 0.1), transparent)",
              "radial-gradient(circle at 90% 50%, hsl(var(--neon-cyan) / 0.1), transparent)",
              "radial-gradient(circle at 50% 80%, hsl(var(--neon-pink) / 0.1), transparent)",
            ]
          ),
        }}
      />
    </section>
  );
};
