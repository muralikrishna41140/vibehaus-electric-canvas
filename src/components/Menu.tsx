import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import electricEspresso from "@/assets/electric-espresso.jpg";
import midnightMocha from "@/assets/midnight-mocha.jpg";
import cyberLatte from "@/assets/cyber-latte.jpg";
import glowDonut from "@/assets/glow-donut.jpg";

const menuItems = [
  {
    name: "Electric Espresso",
    price: "₹180",
    image: electricEspresso,
    emoji: "⚡",
    description: "Pure energy in a cup",
  },
  {
    name: "Midnight Mocha",
    price: "₹220",
    image: midnightMocha,
    emoji: "🌙",
    description: "Dark, mysterious, delicious",
  },
  {
    name: "Cyber Latte",
    price: "₹200",
    image: cyberLatte,
    emoji: "💫",
    description: "Futuristic foam art",
  },
  {
    name: "Glow Donut",
    price: "₹150",
    image: glowDonut,
    emoji: "🍩",
    description: "Sweet neon dreams",
  },
];

export const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="menu"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
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
            Signature Menu
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold font-space text-gradient mb-4">
            Fuel Your Vibe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every item crafted with electric energy and creative passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden glass-effect">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500"
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Neon border effect on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl"
                  initial={false}
                  whileHover={{
                    boxShadow: [
                      "0 0 10px hsl(var(--neon-pink) / 0.3)",
                      "0 0 20px hsl(var(--neon-pink) / 0.6), 0 0 30px hsl(var(--neon-purple) / 0.4)",
                    ],
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Info overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                >
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Item details */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold font-space flex items-center gap-2">
                    <span>{item.emoji}</span>
                    <span className="group-hover:text-gradient transition-all">
                      {item.name}
                    </span>
                  </h3>
                </div>
                <span className="text-2xl font-bold text-accent">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};
