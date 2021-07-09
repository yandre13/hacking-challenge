import React from 'react'
import {MainIcon, MainIconMobile} from 'components/svgs/Page2/Icons'
import {useAppValue} from 'context/AppContext'
import useIsMobile from 'hooks/useIsMobile'

function Placa() {
  const [state] = useAppValue()
  const {isMobile} = useIsMobile()

  return (
    <div
      className="flex justify-between
			border-[3px] rounded-lg border-[#F0F2FA]"
    >
      <div className="py-8 md:py-10 pl-6 pr-3 md:pl-8">
        <span className="text-sub text-sm">Placa: {state.placa}</span>
        <h2 className="text-title text-base md:text-xl mt-1">
          {state.car.brand} {state.car.year} <br /> {state.car.model}
        </h2>
      </div>
      <div className="pl-6 pr-3 scale-[1.08] origin-bottom">
        {isMobile ? <MainIconMobile /> : <MainIcon />}
      </div>
    </div>
  )
}

export default React.memo(Placa)
