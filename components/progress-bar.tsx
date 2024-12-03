'use client'
import { motion, useScroll } from 'framer-motion'
export default function ProgressBar() {
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end'],
  })
  return (
    <motion.div
      className="top-0 left-0 right-0 fixed"
      style={{
        scaleX: scrollYProgress,
        height: '6px',
        background: 'linear-gradient(90deg, #B474F8, #429DFF)',
        zIndex: 1000,
        transformOrigin: '0%',
      }}
    />
  )
}
