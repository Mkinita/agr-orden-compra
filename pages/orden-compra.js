import LayoutOrdenCompra from '../layout/LayoutOrdenCompra'
import useSWR from 'swr'
import useCombustible from '../hooks/useCombustible'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"





export default function Home() {

  const [solicitudesPendientes, setSolicitudesPendientes] = useState(0);
  const [ordenespendientes, setOrdenesPendientes] = useState(0);
  const [entregapendientes, setEntregaPendientes] = useState(0);

  const fetcher = () => axios('/api/solicitudes').then(datos => datos.data);
  const { data, error, isLoading } = useSWR('/api/solicitudes', fetcher, { refreshInterval: 100 });
  
  useEffect(() => {
    if (data) {
      setSolicitudesPendientes(data.length);
    }
  }, [data]);




  const fetcherOrden = () => axios('/api/ordenes-emitidas').then(datos => datos.data)
  const { data:dataOrden, error:errorOrden, isLoading:isLoadingOrden } = useSWR('/api/ordenes-emitidas',fetcherOrden,{refreshInterval: 100}); 

  useEffect(() => {
    if (dataOrden) {
      setOrdenesPendientes(dataOrden.length);
    }
  }, [dataOrden]);


    const fetcherEntega = () => axios('/api/ordenes-autorizadas-false').then(datos => datos.data)
    const { data:dataEntega, error:errorEntega, isLoading:isLoadingEntega } = useSWR('/api/ordenes-autorizadas-false',fetcherEntega,{refreshInterval: 100} )
  
    useEffect(() => {
      if (dataEntega) {
        setEntregaPendientes(dataEntega.length);
      }
    }, [dataEntega]);




  
  

  

  return (
    
    <LayoutOrdenCompra pagina={`Inicio - Inicio`}>
      <Head>
        <meta name="description" content="Carlos Jerez" />
        <link rel="icon" href="/AGRF.png"/>
        <title>Inicio</title>
      </Head>
      

      <div className='grid gap-2 grid-cols-1 md:grid-cols-3 py-20 px-2'>
      
        <div className="border border-solid text-center shadow grid gap-1 grid-cols-2 p-2">
          <div>
          <p className="text-center uppercase font-bold text-xl">Solicitudes</p>
          <p className="text-center text-lg">Pendientes</p>
          <Link href="/solicitudes" className="">
            <span className="">Revisar 👁️‍🗨️</span>
          </Link>
          </div>
          <div style={{ width: '50%', margin: 'auto',}}>
            <CircularProgressbar
              styles={buildStyles({
              pathColor: solicitudesPendientes <= 2 ? '#22c55e' : '#DC2626',
              trailColor: '#F5F5F5',
              textColor: '#0a0a0a',
              textSize:'26px'                            
              })}
              value={100}
              text={`${solicitudesPendientes}`}
            />

          </div>
          
        </div>

        <div className="border border-solid text-center shadow grid gap-1 grid-cols-2 p-2">
          <div>
          <p className="text-center uppercase font-bold text-xl">Ordenes</p>
          <p className="text-center text-lg">Autorizadas</p>
          <Link href="/ordenes-emitidas" className="">
            <span className="">Revisar 👁️‍🗨️</span>
          </Link>
          </div>
          <div style={{ width: '50%', margin: 'auto', textSize:'24px',}}>
            <CircularProgressbar
              styles={buildStyles({
              pathColor: ordenespendientes >= 0 ? '#22c55e' : '#DC2626',
              trailColor: '#F5F5F5',
              textColor: '#0a0a0a',
              textSize:'26px'                            
              })}
              value={100}
              text={`${ordenespendientes}`}
            />

          </div>
          
        </div>

        <div className="border border-solid text-center shadow grid gap-1 grid-cols-2 p-2">
          <div>
          <p className="text-center uppercase font-bold text-xl">Recepciones</p>
          <p className="text-center text-lg">Pendientes</p>
          <Link href="/entrega" className="">
            <span className="">Revisar 👁️‍🗨️</span>
          </Link>
          </div>
          <div style={{ width: '50%', margin: 'auto', textSize:'24px',}}>
            <CircularProgressbar
              styles={buildStyles({
              pathColor: entregapendientes <= 2 ? '#22c55e' : '#DC2626',
              trailColor: '#F5F5F5',
              textColor: '#0a0a0a',
              textSize:'26px'                            
              })}
              value={100}
              text={`${entregapendientes}`}
            />

          </div>
          
        </div>
      </div>

      <div className="py-0">
            <Image width={310} height={190} src="/assets/img/inicioadminA.gif" alt="logo" className="m-auto"/>
      </div>







      
    </LayoutOrdenCompra>
  )
}
