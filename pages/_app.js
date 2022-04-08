import { RobinhoodProvider } from '../context/RobinhoodContext'
import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://actgd4tkgc1o.usemoralis.com:2053/server'
      appId='PYeTwkNzZ9JfRBTRP3KsYIwn46lAN9zHTSDjcuFH'
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  )
}

export default MyApp
