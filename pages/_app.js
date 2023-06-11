import '../styles/globals.css'
import { SaludcProvider } from '../context/SaludcProvider'

function MyApp({ Component, pageProps }) {
  return (
    <SaludcProvider>
      <Component {...pageProps} />
    </SaludcProvider>
  )
}

export default MyApp
