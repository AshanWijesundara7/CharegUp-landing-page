"use client"

import { motion } from "framer-motion"

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="max-w-3xl mx-auto text-center z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Power Up <span className="text-accent">Anywhere</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Join the peer-to-peer ecosystem connecting EV drivers with private charging hosts. Secure, reliable, and
          community-driven.
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll("features")}
          className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition"
        >
          Get Started
        </motion.button>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="mt-16 text-accent text-3xl"
        >
          ⋮
        </motion.div>
      </div>
    </motion.section>
  )
}
