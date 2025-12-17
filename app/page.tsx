"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Benefits from "@/components/benefits"
import Team from "@/components/team"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Team />
      <Footer />
    </div>
  )
}
