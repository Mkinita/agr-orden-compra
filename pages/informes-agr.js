import Head from 'next/head'
import LayoutInformeAgr from "../layout/LayoutInformeAgr"
import Image from "next/image"




export default function InformeAgr() {


    

   return (
        
        <LayoutInformeAgr pagina='Informe-agr'>
         <Head>
            <meta name="description" content="Carlos Jerez" />
            <link rel="icon" href="/CJ.png" />
            <title>Control Produccion AGR</title>
            <meta property="og:image" content="/CJ.png" />
            <meta name="twitter:image" content="/CJ.png" />
         </Head>
         <div className="">
            <Image width={380} height={200} src="/assets/img/inicioadmin.gif" alt="logo" className="m-auto"/>
         </div>
        </LayoutInformeAgr>
        
        
   )
}