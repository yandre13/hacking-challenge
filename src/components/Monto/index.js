import React from 'react'
import {CheckIcon} from 'components/svgs/Page2/Icons'
import useIsMobile from 'hooks/useIsMobile'
import {useAppValue} from 'context/AppContext'
import {useRouter} from 'next/dist/client/router'

function Monto() {
  const {isMobile} = useIsMobile()
  const [state] = useAppValue()
  const router = useRouter()
  return (
    <article
      className="fixed bg-white lg:bg-transparent
		py-3 md:px-20 bottom-0 inset-x-0 border-t shadow-inner
		lg:inset-auto lg:top-[28%] lg:p-0 lg:border-0 lg:shadow-none
		flex justify-center items-center lg:block"
    >
      {!isMobile && (
        <p className="hidden lg:block text-xs md:text-sm text-title font-bold uppercase">
          Monto
        </p>
      )}
      <div className="w-[40%] lg:w-auto">
        <h3 className="text-3xl text-title mt-2 mb-1">
          ${state?.amount?.toFixed(2) || '00.00'}
        </h3>
        {!isMobile ? (
          <p className="text-xs">mensuales</p>
        ) : (
          <p className="text-xs uppercase">mensual</p>
        )}
      </div>
      {!isMobile && (
        <>
          <hr className="hidden lg:block border-color my-6" />
          <p className="hidden lg:block text-title mb-2">El precio incluye:</p>
          <ul className="hidden lg:block mb-6">
            <li className="flex items-center py-1">
              <CheckIcon />{' '}
              <span className="text-sm pl-3">Llanta de respuesto</span>
            </li>
            <li className="flex items-center py-1">
              <CheckIcon />{' '}
              <span className="text-sm pl-3">Analisis de motor</span>
            </li>
            <li className="flex items-center py-1">
              <CheckIcon /> <span className="text-sm pl-3">Aros gratis</span>
            </li>
          </ul>
        </>
      )}
      <button
        className="w-[50%] lg:w-full
				text-white text-sm uppercase
				bg-main rounded-lg
				px-12 py-4 lg:py-3"
        onClick={() => router.push('/gracias')}
      >
        lo quiero
      </button>
    </article>
  )
}

export default Monto
