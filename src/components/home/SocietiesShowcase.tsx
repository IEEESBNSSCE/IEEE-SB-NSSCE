"use client";

import { motion, Variants } from "framer-motion";
import { societies } from "@/data/societies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SocietiesShowcase() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Explore Our <span className="text-gradient">Societies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the 13 specialized student chapters driving innovation across various engineering and technology domains.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {societies.map((society) => (
            <motion.div key={society.id} variants={item} className="h-full">
              <Link href={`/societies/${society.slug}`} className="block h-full">
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-full p-6 rounded-2xl glass border border-pale-silver/40 hover:border-accent-cyan/30 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-ieee-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold ${society.accentColor} shadow-md`}>
                        {society.shortName}
                      </div>
                      <h3 className="font-heading font-semibold text-lg leading-tight group-hover:text-ieee-blue transition-colors">
                        {society.name}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">
                      {society.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-medium text-ieee-blue opacity-80 group-hover:opacity-100 mt-auto">
                      Explore Chapter 
                      <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}

          {/* View All Card */}
          <motion.div variants={item} className="h-full">
            <Link href="/societies" className="block h-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="group relative h-full p-6 rounded-2xl border-2 border-dashed border-pale-silver hover:border-ieee-blue/50 bg-transparent transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-ieee-blue/10 flex items-center justify-center text-ieee-blue mb-3 group-hover:bg-ieee-blue group-hover:text-white transition-colors">
                  <ArrowRight size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg">View All 13 Societies</h3>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
