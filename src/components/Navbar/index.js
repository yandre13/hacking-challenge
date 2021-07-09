import React from 'react'
import Logo from 'components/svgs/Logo'
import TelIcon from 'components/svgs/TelIcon'
import useIsMobile from 'hooks/useIsMobile'
import cn from 'classnames'

function Navbar({white, fixed}) {
  const {isMobile} = useIsMobile()

  return (
    <header
      className={cn(
        white ? 'bg-white' : 'bg-mobile md:bg-transparent',
        fixed && 'z-10 fixed inset-x-0',
      )}
    >
      <section
        className={cn(
          'md:inset-x-0 container flex items-center',
          'h-14 md:h-16',
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
              <a href="tel:014116001" target="_blank" rel="noreferrer">
                <span className="text-sec pl-2">
                  {isMobile ? 'Llámanos' : '(01) 411 6001'}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default React.memo(Navbar)
