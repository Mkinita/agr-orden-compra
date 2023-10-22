import LayoutCarlos from '../layout/LayoutCarlos'
import Head from 'next/head'
import Image from 'next/image'





export default function Home() {

  return (
    
    <LayoutCarlos pagina={`Inicio - Producto`}>
      <Head>
        <meta name="description" content="Carlos Jerez" />
        <link rel="icon" href="/AGRF.png"/>
        <title>Solicitud AGR</title>
      </Head>

        <div className="py-0">
            <Image width={380} height={200} src="/assets/img/inicioadminA.gif" alt="logo" className="m-auto"/>
        </div>
  
      
    </LayoutCarlos>
  )
}



