import React from 'react'
import {MinusIcon, PlusIcon} from 'components/svgs/Page2/Icons'
import {updateCounter} from './functions'
import {useAppValue} from 'context/AppContext'

function Counter() {
  const [state, dispatch] = useAppValue()
  const [count, useCount] = React.useState(state.sum)
  const handleCount = (type, quantity) => {
    updateCounter({count, setCount: useCount, type, quantity})
    dispatch({type: 'updateSum', payload: count})
  }

  return (
    <div className="mt-10 w-full flex flex-col sm:flex-row justify-between">
      <div className="flex flex-col">
        <p className="text-title mb-1">Indica la suma asegurada</p>
        <div className="text-xs flex md:justify-between">
          <span>MIN $12,500</span>{' '}
          <div className="border-l border-color mx-1"></div>{' '}
          <span>MAX $16,500</span>
        </div>
      </div>

      <div
        className="flex justify-between items-center p-4 mt-4 sm:mt-0
				border border-[#C5CBE0] rounded-lg"
      >
        <button onClick={() => handleCount('rest', 100)}>
          <MinusIcon />
        </button>
        <p className="mx-3">$ {state.sum.toLocaleString('en-US')}</p>
        <button onClick={() => handleCount('add', 100)}>
          <PlusIcon />
        </button>
      </div>
    </div>
  )
}

export default Counter
