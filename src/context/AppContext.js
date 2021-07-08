import {createContext, useContext, useState} from 'react'

const AppContext = createContext()

export const AppProvider = ({children}) => {
  const [state, setState] = useState({name: 'Jhon'})
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

export const useAppValue = () => useContext(AppContext)
