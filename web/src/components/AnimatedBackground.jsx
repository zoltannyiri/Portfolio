import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
    }

    const createParticles = () => {
      const particleCount = Math.floor(
        (canvas.width * canvas.height) / 7000
      )

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 1.4 + 0.25,

        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,

        opacity: Math.random() * 0.65 + 0.15,

        opacitySpeed: Math.random() * 0.004 + 0.001,
        fadingOut: Math.random() > 0.5,
      }))
    }

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < -10) {
          particle.x = canvas.width + 10
        }

        if (particle.x > canvas.width + 10) {
          particle.x = -10
        }

        if (particle.y < -10) {
          particle.y = canvas.height + 10
        }

        if (particle.y > canvas.height + 10) {
          particle.y = -10
        }

        if (particle.fadingOut) {
          particle.opacity -= particle.opacitySpeed

          if (particle.opacity <= 0.1) {
            particle.fadingOut = false
          }
        } else {
          particle.opacity += particle.opacitySpeed

          if (particle.opacity >= 0.8) {
            particle.fadingOut = true
          }
        }
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        )

        ctx.fillStyle = `rgba(255,255,255,${particle.opacity})`

        ctx.fill()
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#080d14]">
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_70%_30%,rgba(18,108,105,0.15),transparent_40%),radial-gradient(circle_at_25%_65%,rgba(55,65,105,0.12),transparent_45%)]
        "
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

export default AnimatedBackground