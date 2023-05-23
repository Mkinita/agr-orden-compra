import { Inter } from '@next/font/google'
import Layout from '../layout/Layout'
// import Equipo from '../components/Equipo'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'





export default function Home() {

  

  

  return (
    
    <Layout pagina={`Inicio - Producto`}>
      <Head>
        <meta name="description" content="Carlos Jerez" />
        <link rel="icon" href="/AGRF.png"/>
        <title>Solicitud AGR</title>
      </Head>

      <div className="py-0">
            <Image width={380} height={200} src="/assets/img/inicioadminA.gif" alt="logo" className="m-auto"/>
         </div>
  
      
    </Layout>
  )
}




  
  
  
  

