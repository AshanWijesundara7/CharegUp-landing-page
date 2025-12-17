"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const team = [
  { name: "Vihanga Randima", image: "/team-member-1.jpg" },
  { name: "Ashan Malidu", image: "/team-member-2.jpg" },
  { name: "Tishini Maneesha", image: "/team-member-3.jpg" },
  { name: "Sasini Yashoba", image: "/team-member-4.jpg" },
  { name: "Sandalli Kawmud", image: "/team-member-5.jpg" },
  { name: "Tashmith Mesith", image: "/team-member-6.jpg" },
]

export default function Team() {
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
    hidden: { y: 30, opacity: 0 },
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
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-20">
          Our Team
        </motion.h2>

        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
              className="p-6 bg-card/50 border border-border rounded-lg backdrop-blur-sm text-center"
            >
              <div className="mb-4 overflow-hidden rounded-lg bg-secondary/20 h-40">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
