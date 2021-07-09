import Logo from 'components/svgs/Logo'
import TelIcon from 'components/svgs/TelIcon'
import useIsMobile from 'hooks/useIsMobile'
import cn from 'classnames'

function Navbar({white}) {
  const {isMobile} = useIsMobile()

  return (
    <header
      className={cn(
        'md:inset-x-0 container flex items-center',
        'h-14 md:h-16 z-10',
        white ? 'bg-white' : 'fixed bg-mobile md:bg-transparent',
      )}
    >
      <div className="flex-1">
        <Logo />
      </div>
      <nav>
        <ul className="flex">
          {!isMobile && <li className="mx-2">¿Tienes alguna duda?</li>}
          <li className="flex items-center ml-2">
            <TelIcon />
            <span className="text-sec pl-2">
              {isMobile ? 'Llámanos' : '(01) 411 6001'}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
