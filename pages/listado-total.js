import Head from 'next/head'
import useSWR from 'swr'
import LayoutInformeAgr from "../layout/LayoutInformeAgr"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useCallback, useState } from "react"
import {formatoNumero} from "helpers/formato";
import Produccion from '../components/Produccion'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { Bar } from 'react-chartjs-2';




export default function InformeAgr() {

    const [currentMonth, setCurrentMonth] = useState('');
    useEffect(() => {
        const date = new Date();
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        setCurrentMonth(monthNames[date.getMonth()]);
    }, []);

    const fetcher = () => axios('/api/producion-aserradero').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/producion-aserradero',fetcher,{refreshInterval: 100} )

    const [data1, setData1] = useState([]);
      useEffect(() => {
        async function fetchData() {
        const response1 = await fetch('/api/producion-aserradero');
        const data1 = await response1.json();
        setData1(data1);
      }
  
      fetchData();
    }, []);



    let totalVolumens = 0;
    let totalIngreso = 0;

    data1.forEach((producciones) => {
        totalVolumens += parseFloat(producciones.volumen);
        totalIngreso += parseFloat(producciones.ingreso);
        
    });

    const proyeccion = totalIngreso !== 0 ? (totalVolumens / totalIngreso) * 100 : 0;


    const fetcherClasificado = () => axios('/api/producciones-clasificado').then(datos => datos.data)
    const { data: dataClasificado, error : errorClasificado, isLoading: isLoadingClasificado } = useSWR('/api/producciones-clasificado',fetcherClasificado,{refreshInterval: 100} )

    const [data2, setData2] = useState([]);
      useEffect(() => {
        async function fetchData2() {
        const response2 = await fetch('/api/producciones-clasificado');
        const data2 = await response2.json();
        setData2(data2);
      }
  
      fetchData2();
    }, []);



    let totalVolumenscla = 0;
    let totalIngresocla = 0;

    data2.forEach((produccioness) => {
        totalVolumenscla += parseFloat(produccioness.volumen);
        totalIngresocla += parseFloat(produccioness.ingreso);
        
    });

    const proyeccioncla = totalIngresocla !== 0 ? (totalVolumenscla / totalIngresocla) * 100 : 0;


    const fetcherEmpalillado = () => axios('/api/produccion-empalillado').then(datos => datos.data)
    const { data: dataEmpalillado, error: errorEmpalillado, isLoading: isLoadingEmpalillado } = useSWR('/api/produccion-empalillado',fetcherEmpalillado,{refreshInterval: 100} )


    const [data3, setData3] = useState([]);
      useEffect(() => {
        async function fetchData3() {
        const response3 = await fetch('/api/produccion-empalillado');
        const data3 = await response3.json();
        setData3(data3);
      }
  
      fetchData3();
    }, []);



    let totalVolumensemp = 0;
    let totalIngresoemp = 0;

    data3.forEach((produccionesss) => {
        totalVolumensemp += parseFloat(produccionesss.volumen);
        totalIngresoemp += parseFloat(produccionesss.ingreso);
        
    });

    const proyeccionemp = totalIngresoemp !== 0 ? (totalVolumensemp / totalIngresoemp) * 100 : 0;


    const dataemp = {
        labels: data3.map((producciones) => producciones.fecha),
        datasets: [
          {
            label: 'Produccion Stacker',
            data: data3.map((producciones) => producciones.volumen),
            backgroundColor: ' #a3e635',
            borderColor: ' #a3e636',
            borderWidth: 1,
            barPercentage: 0.3, // Ancho de las barras
            categoryPercentage: 1, // Espacio entre barras
          },
        ],
      };






      const fetcherSecado = () => axios('/api/produccion-secado').then(datos => datos.data)
      const { data: dataSecado, error: errorSecado, isLoading: isLoadingSecado } = useSWR('/api/produccion-secado',fetcherEmpalillado,{refreshInterval: 100} )
  
  
      const [data4, setData4] = useState([]);
        useEffect(() => {
          async function fetchData4() {
          const response4 = await fetch('/api/produccion-secado');
          const data4 = await response4.json();
          setData4(data4);
        }
    
        fetchData4();
      }, []);
  
  
  
      let totalVolumensseco = 0;
      let totalIngresoseco = 0;
  
      data4.forEach((produccionesss) => {
          totalVolumensseco += parseFloat(produccionesss.volumen);
          totalIngresoseco += parseFloat(produccionesss.ingreso);
          
      });
  
      const proyeccionseco = totalIngresoseco !== 0 ? (totalVolumensseco / totalIngresoseco) * 100 : 0;
  
  
      const dataseco = {
          labels: data4.map((producciones) => producciones.fecha),
          datasets: [
            {
              label: 'secado',
              data: data4.map((producciones) => producciones.volumen),
              backgroundColor: ' #a3e635',
              borderColor: ' #a3e636',
              borderWidth: 1,
              barPercentage: 0.3, // Ancho de las barras
              categoryPercentage: 1, // Espacio entre barras
            },
          ],
        };


    

    
    

    

   return (
        <>
            <LayoutInformeAgr pagina='Informe-agr'>
                <Head>
                    <meta name="description" content="Carlos Jerez" />
                    <link rel="icon" href="/CJ.png" />
                    <title>Control Produccion AGR</title>
                    <meta property="og:image" content="/CJ.png" />
                    <meta name="twitter:image" content="/CJ.png" />
                </Head>
                {/* <h1 className='text-2xl font-black text-center pb-5'>Indicadores {currentMonth}</h1> */}

                <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Indicadores {currentMonth}</h2>
                        <div className="flex space-x-4">
                        <div className="flex items-center">
                            <span className="bg-green-500 rounded-full w-4 h-4 mr-2"></span>
                            <span>✔️</span>
                        </div>
                        <div className="flex items-center">
                            <span className="bg-red-500 rounded-full w-4 h-4 mr-2"></span>
                            <span>❌</span>
                        </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Aserradero</h2>
                                <div style={{ width: '40%', margin: 'auto' }}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: proyeccion >= 47 ? '#22c55e' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                        })}
                                        value={100}
                                        text={`${formatoNumero(proyeccion)}%`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngreso)} m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngreso)} m4</td>  
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumens)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngreso)} m4</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="bg-white p-4 rounded-md shadow">
                            <div className='flex items-center'>
                                <h2 className="text-lg font-semibold text-right ml-6">Clasificacion</h2>
                                <div style={{ width: '40%', margin: 'auto' }}>
                                    <CircularProgressbar
                                        styles={buildStyles({
                                            pathColor: proyeccioncla >= 96 ? '#22c55e' : '#DC2626',
                                            trailColor: '#F5F5F5',
                                            textColor: '#0a0a0a',
                                        })}
                                        value={100}
                                        text={`${formatoNumero(proyeccioncla)}%`}
                                    />


                                </div>
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumenscla)} m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresocla)} m4</td>  
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresocla)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumenscla)} m4</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        <div className="bg-white p-4 rounded-md shadow">
                            <div className=''>
                                <h2 className="text-lg text-center font-semibold">Stacker</h2>
                                <div className='p-2 m-auto items-center'>
                                <Bar className='' data={dataemp} />
                                </div>

                               
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumensemp)} m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresoemp)} m4</td>  
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresoemp)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumensemp)} m4</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="bg-white p-4 rounded-md shadow">
                            <div className=''>
                                <h2 className="text-lg text-center font-semibold">Secado</h2>
                                <div className='p-2 m-auto items-center'>
                                <Bar className='' data={dataseco} />
                                </div>

                               
                            </div>
                            <div className='flex justify-center'>     
                                <div className="overflow-x-auto py-2 text-xs font-bold">
                                    <div className="min-w-full">
                                        <table className="table-auto">
                                        <tbody>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Real </td>
                                                <td className="border border-lime-200 px-1 py-2 text-center" colspan="2">Proyeccion </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Ingreso</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumensseco)} m³</td> 
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresoseco)} m4</td>  
                                            </tr>
                                            <tr>
                                                <td className="border border-lime-200 px-1 py-2">Produccion</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalIngresoseco)} m³</td>
                                                <td className="border border-lime-200 px-1 py-2">{formatoNumero(totalVolumensseco)} m4</td>   
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        
                        
                        
                    

                        
                        
                        
                    </div>
                    
                </div>

                
                
                
            
            </LayoutInformeAgr>
        
        </>
        
   )
}


            