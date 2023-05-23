import '../styles/globals.css'
import { CombustibleProvider } from '../context/CombustibleProvider'
// import ModalArticulo from '../components/ModalArticulo';

export default function App({ Component, pageProps }) {
  return (
    <CombustibleProvider>
        <Component {...pageProps} />
        {/* <ModalArticulo /> */}
    </CombustibleProvider>
  )
}
