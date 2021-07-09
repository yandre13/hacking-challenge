import React from 'react'
import {AnimateSharedLayout, motion} from 'framer-motion'
import cn from 'classnames'

const texts = [
  'Protege a <br/> tu auto',
  'Protege a los <br/> que te rodean',
  'Mejora tu <br/> plan',
]

function TabCoberturas() {
  const [selected, setSelected] = React.useState(texts[0])

  return (
    <AnimateSharedLayout>
      <ul className="flex justify-between border-b border-[#E4E8F7]">
        {texts.map(text => (
          <Item
            key={text}
            text={text}
            selected={selected}
            onClick={() => setSelected(text)}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  )
}

const Item = ({text, selected, onClick}) => (
  <li className="text-[10px] text-center relative p-5">
    <span
      role="button"
      className={cn(
        'uppercase font-bold',
        selected === text ? 'text-main' : 'text-title',
      )}
      onClick={onClick}
      dangerouslySetInnerHTML={{__html: text}}
    ></span>
    {selected === text && (
      <motion.div
        layoutId="outline"
        className="absolute bottom-[-1px] inset-x-0 border-t-2"
        initial={false}
        animate={{borderColor: '#EF3340'}}
        transition={spring}
      />
    )}
  </li>
)

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

export default TabCoberturas
