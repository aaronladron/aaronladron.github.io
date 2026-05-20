import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = window.innerWidth
    let h = window.innerHeight
    let dpr = Math.max(1, window.devicePixelRatio || 1)
    let rafId

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    const colors = ['rgba(59,130,246,1)', 'rgba(124,58,237,1)']

    const particles = []
    const COUNT = Math.max(24, Math.floor((w * h) / 25000))
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 0.6 + Math.random() * 1.6,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    const mouse = { x: -9999, y: -9999, active: false }
    let terminalHover = false

    // detect terminal elements to provide calmer interaction when hovering them
    const terminalEls = Array.from(document.querySelectorAll('.terminal-target'))
    function setTerminalHover(val) { terminalHover = val }
    terminalEls.forEach(el => {
      el.addEventListener('mouseenter', () => setTerminalHover(true))
      el.addEventListener('mouseleave', () => setTerminalHover(false))
      el.addEventListener('touchstart', () => setTerminalHover(true))
      el.addEventListener('touchend', () => setTerminalHover(false))
    })

    function onMove(e) {
      mouse.active = true
      mouse.x = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || mouse.x
      mouse.y = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || mouse.y
    }
    function onLeave() {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('touchend', onLeave)

    function draw() {
      ctx.clearRect(0, 0, w, h)

      // Black background
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, w, h)

      // update & draw small particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // gentle wandering
        p.vx += (Math.random() - 0.5) * 0.01
        p.vy += (Math.random() - 0.5) * 0.01

        // mouse interaction: increase movement near cursor
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            const force = (140 - dist) / 140
            const base = terminalHover ? 0.28 : 0.9 // calmer near terminal
            p.vx += (dx / (dist || 1)) * base * force
            p.vy += (dy / (dist || 1)) * base * force
            if (!terminalHover) {
              // amplify speed slightly when hovered outside terminal
              p.vx *= 1.08
              p.vy *= 1.08
            }
          }
        }

        // velocity damping
        p.vx *= 0.995
        p.vy *= 0.995

        p.x += p.vx
        p.y += p.vy

        // wrap
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        // draw small soft dot
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.95
        ctx.shadowBlur = 6
        ctx.shadowColor = p.color
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('touchend', onLeave)
      terminalEls.forEach(el => {
        el.removeEventListener('mouseenter', () => setTerminalHover(true))
        el.removeEventListener('mouseleave', () => setTerminalHover(false))
        el.removeEventListener('touchstart', () => setTerminalHover(true))
        el.removeEventListener('touchend', () => setTerminalHover(false))
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <canvas ref={canvasRef} />
    </div>
  )
}
