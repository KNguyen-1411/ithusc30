'use client'
import { useState, useEffect } from 'react'
import { Navbar as NextUINavbar, NavbarMenuToggle } from '@nextui-org/navbar'

import nav from './navbar.module.scss'
import LogoNav from './logo'
import MenuNav from './menu'
import MenuNavReponsive from './menu-rp'

export default function Navbar({ inView }: { inView?: number }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      className={`${nav.NavBarUI} ${
        isScrolled ? nav.NavBarUIScroll : nav.NavBarNotScroll
      } `}
    >
      <LogoNav isScrolled={isScrolled} />
      <MenuNav inView={inView ?? 0} isScrolled={isScrolled} />
      <NavbarMenuToggle onClick={toggleMenu} className="md:hidden text-white" />
      <MenuNavReponsive
        isScrolling={isScrolled}
        setIsMenuOpen={setIsMenuOpen}
      />
    </NextUINavbar>
  )
}
