"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Particles array
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      r: number
      opacity: number
    }> = []

    // Initialize particles
    const initParticles = () => {
      particles.length = 0
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 1.5,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    initParticles()

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(10, 22, 40, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Draw particle
        ctx.fillStyle = `rgba(0, 217, 255, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        particles.forEach((p2, j) => {
          if (i < j) {
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.strokeStyle = `rgba(0, 217, 255, ${(1 - distance / 150) * 0.2})`
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        })
      })

      // Draw flowing curves
      ctx.strokeStyle = "rgba(0, 217, 255, 0.1)"
      ctx.lineWidth = 2
      ctx.beginPath()
      const time = Date.now() / 5000
      for (let x = -100; x < canvas.width + 100; x += 50) {
        const y = Math.sin(x / 200 + time) * 200 + canvas.height * 0.3
        if (x === -100) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
      initParticles()
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
