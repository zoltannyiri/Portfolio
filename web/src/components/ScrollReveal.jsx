import { useEffect, useRef, useState } from "react"

const ScrollReveal = ({ children, direction = "up", delay = 0, className = "",}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.15,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const hiddenClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-y-8 sm:translate-y-0 sm:-translate-x-10",
    right: "translate-y-8 sm:translate-y-0 sm:translate-x-10",
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all
        duration-700
        ease-out
        ${
          isVisible
            ? "translate-x-0 translate-y-0 opacity-100"
            : `${hiddenClasses[direction]} opacity-0`
        }
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
