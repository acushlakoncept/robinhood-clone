import { RobinhoodProvider } from '../context/RobinhoodContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RobinhoodProvider>
      <Component {...pageProps} />
    </RobinhoodProvider>
  )
}

export default MyApp
