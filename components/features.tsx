"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = [
  {
    icon: "🔌",
    title: "Peer-to-peer charging",
    description: "Access charging wherever you need it",
  },
  {
    icon: "📍",
    title: "Charger coverage map",
    description: "Find available chargers in your area",
  },
  {
    icon: "🔐",
    title: "Smart booking system",
    description: "Book and manage charging easily",
  },
  {
    icon: "💳",
    title: "Secure online payment",
    description: "Safe and easy transactions",
  },
  {
    icon: "👤",
    title: "Real-time Accounts",
    description: "Manage your account on the go",
  },
  {
    icon: "⭐",
    title: "Ratings & Reviews",
    description: "Community-driven ratings",
  },
]

export default function Features() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
      id="features"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Everything you need a seamless charge</h2>
          <p className="text-muted-foreground">Explore the features that set us apart.</p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "var(--accent)" }}
              className="p-6 bg-card/50 border border-border rounded-lg backdrop-blur-sm hover:bg-card/80 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
