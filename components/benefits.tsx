"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const benefits = [
  {
    tag: "For Drivers",
    title: "Eliminate Range Anxiety",
    description: "Access charging anywhere with seamless solutions",
    points: ["Abundant charging options", "Faster charging alternatives", "Transparent ranges"],
  },
  {
    tag: "For Hosts",
    title: "Monetize Your Charger",
    description: "Earn passive income by sharing your charger",
    points: ["Earn passive income", "Flexible scheduling", "Help your community"],
  },
]

export default function Benefits() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
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
      className="relative py-20 px-4"
      id="benefits"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 bg-card/50 border border-border rounded-lg backdrop-blur-sm hover:bg-card/80 transition-colors"
            >
              <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full font-semibold">
                {benefit.tag}
              </span>
              <h3 className="text-2xl font-bold my-4">{benefit.title}</h3>
              <p className="text-muted-foreground mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
