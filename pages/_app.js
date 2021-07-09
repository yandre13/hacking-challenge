import '../styles/globals.css'
import {AppProvider} from 'context/AppContext'
import {initialState, reducer} from 'context/reducer'

function MyApp({Component, pageProps}) {
  return (
    <AppProvider reducer={reducer} initialState={initialState}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
