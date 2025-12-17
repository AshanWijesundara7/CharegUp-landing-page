// Animated Canvas Background
const canvas = document.getElementById("backgroundCanvas")
const ctx = canvas.getContext("2d")

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

resizeCanvas()
window.addEventListener("resize", resizeCanvas)

// Particle system for animated lines
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.radius = Math.random() * 2 + 1
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0) this.x = canvas.width
    if (this.x > canvas.width) this.x = 0
    if (this.y < 0) this.y = canvas.height
    if (this.y > canvas.height) this.y = 0
  }

  draw() {
    ctx.fillStyle = "rgba(0, 212, 255, 0.3)"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}

// Create particles
const particles = []
const particleCount = 50

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle())
}

// Draw connections between particles
function drawConnections() {
  const maxDistance = 150

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < maxDistance) {
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / maxDistance)})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach((particle) => {
    particle.update()
    particle.draw()
  })

  drawConnections()
  requestAnimationFrame(animate)
}

animate()

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all fade-in-up elements
document.querySelectorAll(".fade-in-up").forEach((el) => {
  el.style.opacity = "0"
  observer.observe(el)
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll event for navbar background
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(10, 14, 39, 0.95)"
  } else {
    navbar.style.backgroundColor = "rgba(10, 14, 39, 0.8)"
  }
})

// Navbar active link update on scroll
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-pills .nav-link")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

console.log("[v0] ChargeUp landing page loaded successfully")
