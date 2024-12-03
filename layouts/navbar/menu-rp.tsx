import { NavbarItem, NavbarMenu } from '@nextui-org/navbar'
import { Link } from 'react-scroll'
import { NavbarList } from './navbar-list'
import nav from './navbar.module.scss'

interface NavbarListProps {
  // eslint-disable-next-line no-unused-vars
  setIsMenuOpen: (value: boolean) => void
  isScrolling?: boolean
}

export default function MenuNavReponsive({
  setIsMenuOpen,
  isScrolling,
}: NavbarListProps) {
  return (
    <NavbarMenu className={`pt-10 ${isScrolling ? '' : nav.MenuRpS}`}>
      {NavbarList.map((item) => (
        <Link
          key={item.id}
          to={item.id}
          smooth
          offset={-70}
          duration={500}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavbarItem className="text-xl mb-3 text-gray-700 font-semibold">
            {item.label}
          </NavbarItem>
        </Link>
      ))}
    </NavbarMenu>
  )
}
