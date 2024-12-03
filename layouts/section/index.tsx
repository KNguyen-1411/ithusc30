import React from 'react'

interface SectionProps {
  id: string
  className?: string
  children: React.ReactNode
  ref: React.RefObject<HTMLDivElement>
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, className }, ref) => {
    return (
      <section id={id + 'Section'} className={className} ref={ref}>
        {children}
      </section>
    )
  },
)

Section.displayName = 'Section'

export default Section
