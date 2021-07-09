import useIsMobile from 'hooks/useIsMobile'
import {BackIcon} from 'components/svgs/Page2/Icons'
import {useRouter} from 'next/dist/client/router'

function History() {
  const {isMobile} = useIsMobile()

  return (
    <div className="w-full md:w-[60%] md:ml-[25%] md:mr-[15%] my-4 md:my-14">
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  )
}

function Mobile() {
  const router = useRouter()
  return (
    <div className="flex justify-between items-center">
      <div role="button" onClick={() => router.push('/')}>
        <BackIcon />
      </div>
      <span className="text-xs font-bold uppercase px-4">Paso 2 de 2</span>
      <div className="bg-sec flex-1 h-[6px] rounded-xl"></div>
    </div>
  )
}

function Desktop() {
  return (
    <>
      <div className="flex items-center">
        <span
          className="w-6 h-6 grid place-content-center
					text-xs text-[#C5CBE0]
					border border-[#C5CBE0] rounded-full"
        >
          1
        </span>
        <span className="text-sub pl-3">Datos</span>
      </div>
      <div className="h-8 w-0.5 ml-3 border-l-2 border-dashed my-1"></div>
      <div className="flex items-center">
        <span
          className="w-6 h-6 grid place-content-center
					text-xs text-white bg-sec
					border border-[#6F7DFF] rounded-full"
        >
          2
        </span>
        <span className="text-title pl-3">Arma tu plan</span>
      </div>
    </>
  )
}

export default History
