import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Llanta, Choque, Atropello, ArrowIconPath} from './Icons'
import Add from './Add'
import useIsMobile from 'hooks/useIsMobile'
import cn from 'classnames'
import {useAppValue} from 'context/AppContext'

const data = [
  {
    id: 1,
    icon: Llanta,
    title: 'Llanta robada',
    content:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
    value: 15,
  },
  {
    id: 2,
    icon: Choque,
    title: 'Choque y/o pasarte la luz roja',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum laboriosam distinctio, nulla ratione totam tenetur saepe. Maxime tenetur voluptatibus perspiciatis.',
    value: 20,
  },
  {
    id: 3,
    icon: Atropello,
    title: 'Atropello en la vía Evitamiento',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum laboriosam distinctio, nulla ratione totam tenetur saepe. Maxime tenetur voluptatibus perspiciatis.',
    value: 50,
  },
]

function Coberturas() {
  const [list, setList] = React.useState(data)
  const [state] = useAppValue()
  React.useEffect(() => {
    if (state.sum > 16000) {
      setList(list => list.filter(item => item.id !== 2))
    } else {
      setList(data)
    }
  }, [state.sum])
  return (
    <ul className="pb-24 lg:pb-10">
      {list.map(({icon, title, content, id, value}) => (
        <Cobertura
          key={id}
          id={id}
          Icon={icon}
          title={title}
          content={content}
          value={value}
        />
      ))}
    </ul>
  )
}

function Cobertura({Icon, id, title, content, value}) {
  const [open, setOpen] = React.useState(id === 1)
  const [added, setAdded] = React.useState(id === 1)
  const {isMobile} = useIsMobile()
  const [state, dispatch] = useAppValue()

  const handleClick = () => {
    setAdded(added => !added)
    dispatch({
      type: 'updateAmount',
      payload: added ? state.amount - value : state.amount + value,
    })
  }
  /*eslint-disable*/
  React.useEffect(() => {
    if (state.sum > 16000 && id === 2) {
      added && handleClick()
    }
  }, [state.sum, id])

  return (
    <motion.li layout className="border-b border-[#E4E8F7] py-10">
      <div className="flex">
        <div>
          <Icon />
        </div>
        <div className="px-6 flex-1">
          <div className="flex justify-between items-start md:block">
            <h4 className="text-title text-base md:text-xl flex-1">{title}</h4>
            <Add added={added} onClick={handleClick} isMobile={isMobile} />
          </div>
          <AnimatePresence>
            {open && (
              <motion.p
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                className="text-sm leading-relaxed"
              >
                <span className="pt-4 block">{content}</span>
              </motion.p>
            )}
          </AnimatePresence>

          {isMobile && (
            <ArrowText open={open} onClick={() => setOpen(open => !open)} />
          )}
        </div>
        {!isMobile && (
          <Arrow open={open} onClick={() => setOpen(open => !open)} />
        )}
      </div>
    </motion.li>
  )
}

function Arrow({open, onClick, color}) {
  return (
    <div>
      <motion.svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="button"
        initial={false}
        animate={{rotate: open ? 180 : 0}}
        onClick={onClick}
        className="origin-center"
      >
        <ArrowIconPath color={color} />
      </motion.svg>
    </div>
  )
}

function ArrowText({open, onClick}) {
  return (
    <div
      className={cn(
        'flex items-center mt-4',
        open && 'brightness-50 opacity-50',
      )}
      role="button"
      onClick={onClick}
    >
      <span className="text-sec text-xs uppercase pr-2 font-bold">
        {open ? 'ver menos' : 'ver más'}
      </span>
      <Arrow open={open} color="#6F7DFF" />
    </div>
  )
}

const variants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      opacity: {
        duration: 0.5,
      },
      height: {
        duration: 0.3,
      },
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: {
        duration: 0.3,
      },
      height: {
        duration: 0.5,
      },
    },
  },
}

export default Coberturas
