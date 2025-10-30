import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import cafeVibes from "@/assets/cafe-vibes.jpg";
import liveSessions from "@/assets/live-sessions.jpg";
import creativeZone from "@/assets/creative-zone.jpg";
import heroImage from "@/assets/hero-cafe.jpg";

const galleryImages = [
  { src: heroImage, alt: "Neon café interior", span: "md:col-span-2 md:row-span-2" },
  { src: cafeVibes, alt: "Creative workspace", span: "md:col-span-1" },
  { src: liveSessions, alt: "Live music session", span: "md:col-span-1" },
  { src: creativeZone, alt: "Collaborative zone", span: "md:col-span-2" },
];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-accent/50 text-accent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Gallery
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold font-space text-gradient">
            Capture the Energy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 0.98, zIndex: 10 }}
              className={`relative group overflow-hidden rounded-2xl ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-500"
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "inset 0 0 60px hsl(var(--neon-pink) / 0.3), inset 0 0 80px hsl(var(--neon-purple) / 0.2)",
                }}
              />

              {/* Neon border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-2xl"
                whileHover={{
                  boxShadow: "0 0 30px hsl(var(--neon-cyan) / 0.6)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
};
