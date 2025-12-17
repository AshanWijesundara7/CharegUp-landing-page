"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-foreground">ChargeUp</div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleScroll("features")}
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              FEATURES
            </button>
            <button
              onClick={() => handleScroll("how-it-works")}
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              HOW IT WORKS
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="text-sm text-muted-foreground hover:text-accent transition"
            >
              ABOUT US
            </button>
          </div>
          <button className="px-6 py-2 border border-border text-foreground rounded-full text-sm hover:bg-border/50 transition">
            LOG IN
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
