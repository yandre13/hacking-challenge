import React from 'react'
import Head from 'next/head'
import Navbar from 'components/Navbar'
import FormHome from 'components/FormHome'
import useIsMobile from 'hooks/useIsMobile'
import {BannerIcon, BannerIconMobile} from 'components/svgs/Page1/Icons'
import {useAppValue} from 'context/AppContext'
import {cars} from 'utils'

export default function Home({user, car}) {
  const {isMobile} = useIsMobile()
  const [, dispatch] = useAppValue()

  React.useEffect(() => {
    dispatch({type: 'setUser', payload: user})
    dispatch({type: 'setCar', payload: car})
  }, [user, car, dispatch])

  return (
    <div>
      <Head>
        <title>Home | Hacking challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-full h-[100%] relative overflow-hidden">
        <section
          className="w-full 
				flex flex-wrap"
        >
          <article className="w-full md:w-[40%] md:h-[100vh] bg-mobile md:bg_banner flex items-center">
            <div className="container_mobile">
              <div className="w-full md:w-[60%] md:ml-[25%] md:mr-[15%] my-14">
                <div className="absolute top-[7.5%] right-0 md:relative md:top-auto md:right-auto">
                  {isMobile ? <BannerIconMobile /> : <BannerIcon />}
                </div>
                <div className="w-[70%] md:w-full">
                  <p className="text-xs md:text-base text-title font-bold uppercase pt-10 md:pt-0">
                    ¡Nuevo!
                  </p>
                  <h1 className="text-[28px] leading-tight md:text-4xl font-normal text-title mt-2 mb-4">
                    Seguro{' '}
                    <span className="text-main">
                      Vehicular <br /> Tracking
                    </span>
                  </h1>
                  <p className="mb-8">
                    Cuentanos donde le haras seguimiento a tu seguro
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="w-full md:w-[60%] md:h-[100vh] container_mobile flex items-center">
            <div className="w-full md:w-[60%] md:mx-[20%] my-12">
              <h1 className="text-title text-3xl">Déjanos tus datos</h1>
              <FormHome />
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

const getNumber = () => Math.floor(Math.random() * 10) + 1
const getCarById = id => cars.find(c => c.id === id)
export async function getServerSideProps() {
  const n = getNumber()
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${n}`)
  const {id, name, username, email} = await res.json()
  return {
    props: {
      user: {id, name, username, email},
      car: getCarById(n),
    },
  }
}
