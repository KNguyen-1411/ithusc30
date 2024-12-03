import HomeIcon from '@/components/home-icon'
import { NavbarContent, NavbarItem } from '@nextui-org/navbar'
import nav from './navbar.module.scss'
import { Link } from 'react-scroll'
import { Tooltip } from '@nextui-org/tooltip'
interface MenuNavProps {
  inView: number
  isScrolled: boolean
}
export default function MenuNav({ inView, isScrolled }: MenuNavProps) {
  return (
    <NavbarContent
      className="text-white hidden md:flex gap-6 relative"
      justify="end"
    >
      <Link to="HomeSection" smooth offset={-70} duration={500}>
        <Tooltip showArrow={true} content="Trở về trang chủ">
          <NavbarItem
            className={`
              ${nav.NavItem}
              ${inView === 1 ? nav.NavItemActiHome : ''}
              ${isScrolled ? nav.NavItemScroll : ''}
            `}
          >
            <HomeIcon />
          </NavbarItem>
        </Tooltip>
      </Link>
      <Link to="AboutSection" smooth offset={-70} duration={500}>
        <NavbarItem
          className={`
              ${nav.NavItem}  ${nav.NotHome}
              ${inView === 2 ? nav.NavItemActi : ''}
              ${isScrolled ? nav.NavItemScroll : ''}
            `}
        >
          Giới thiệu
        </NavbarItem>
      </Link>
      <Link to="ItinerarySection" smooth offset={-70} duration={500}>
        <NavbarItem
          className={`
            ${nav.NavItem}  ${nav.NotHome}
            ${inView === 3 ? nav.NavItemActi : ''}
            ${isScrolled ? nav.NavItemScroll : ''}
          `}
        >
          Hành trình
        </NavbarItem>
      </Link>
      <Link to="EventSection" smooth offset={-70} duration={500}>
        <NavbarItem
          className={`
              ${nav.NavItem}  ${nav.NotHome}
              ${inView === 4 ? nav.NavItemActi : ''}
              ${isScrolled ? nav.NavItemScroll : ''}
            `}
        >
          Sự kiện
        </NavbarItem>
      </Link>
    </NavbarContent>
  )
}
