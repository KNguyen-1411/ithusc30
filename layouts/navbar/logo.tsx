import { NavbarBrand } from '@nextui-org/navbar'
import nav from './navbar.module.scss'
interface LogoProps {
  isScrolled: boolean
}

export default function LogoNav({ isScrolled }: LogoProps) {
  return (
    <NavbarBrand>
      <div className={` ${isScrolled ? nav.NavIconScroll : nav.NavIcon} `} />
    </NavbarBrand>
  )
}
