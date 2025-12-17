"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const steps = [
  { icon: "👤", title: "STEP 1: Signup", description: "Create your account in seconds" },
  { icon: "🔍", title: "STEP 2: Explore/Host", description: "Find chargers or host your own" },
  { icon: "📅", title: "STEP 3: Book & Charge", description: "Schedule your charging time" },
  { icon: "💰", title: "STEP 4: Pay", description: "Complete secure transactions" },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative py-32 px-4"
      id="how-it-works"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">Get started in a few simple steps</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center gap-4 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-full bg-card/50 border border-border flex items-center justify-center text-4xl backdrop-blur-sm"
              >
                {step.icon}
              </motion.div>
              <h3 className="font-semibold text-center">{step.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-[calc(25%+60px)] w-24 h-1 bg-gradient-to-r from-accent to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
