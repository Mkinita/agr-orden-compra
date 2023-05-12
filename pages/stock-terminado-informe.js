import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import LayoutInformeAgr from "../layout/LayoutInformeAgr"
import useSWR from 'swr'
import axios from 'axios'
import InformeClasificado from '../components/InformeClasificado'
import {formatoNumero} from "helpers/formato";
import EmpalilladoActual from '../components/EmpalilladoActual'



export default function InformeAgr() {


    const fetcher = () => axios('/api/stock-col').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/stock-col',fetcher,{refreshInterval: 100} )

    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/stock-col'
  
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
      }   
     //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value)   
    }
     //  metodo de filtrado 2   
    const results = !search ? users : users.filter((dato)=> JSON.stringify(dato.pedido).toLowerCase().includes(search.toLowerCase()))

     useEffect( ()=> {
      showData()
    }, [])


    


    const fetcherInd = () => axios('/api/stock-ind').then(datos => datos.data)
    const { data: dataInd, error: errorInd, isLoading: isLoadingInd } = useSWR('/api/stock-ind', fetcherInd, {refreshInterval: 100})

    const [ users02, setUsers02 ] = useState([])
    const [ search02, setSearch02 ] = useState("")

    const URLSS = '/api/stock-ind'
  
    const showData02 = async () => {
        const response = await fetch(URLSS)
        const data = await response.json()
        setUsers02(data)
      }   
     //función de búsqueda
    const searcher02 = (e) => {
        setSearch02(e.target.value)   
    }
     //  metodo de filtrado 2   
    const results02 = !search02 ? users02 : users02.filter((dato)=> JSON.stringify(dato.pedido).toLowerCase().includes(search02.toLowerCase()))

     useEffect( ()=> {
      showData02()
    }, [])


    const fetcherRema = () => axios('/api/stock-rema').then(datos => datos.data)
    const { data: datarema, error: errorEmpalillado, isLoading: isLoadingEmpalillado } = useSWR('/api/empalillado-actual', fetcherRema, {refreshInterval: 100})

    const [ users01, setUsers01 ] = useState([])
    const [ search01, setSearch01 ] = useState("")

    const URLS = '/api/stock-rema'
  
    const showData01 = async () => {
        const response = await fetch(URLS)
        const data = await response.json()
        setUsers01(data)
      }   
     //función de búsqueda
    const searcher01 = (e) => {
        setSearch01(e.target.value)   
    }
     //  metodo de filtrado 2   
    const results01 = !search01 ? users01 : users01.filter((dato)=> JSON.stringify(dato.pedido).toLowerCase().includes(search01.toLowerCase()))

     useEffect( ()=> {
      showData01()
    }, [])


    const fetcherSrv = () => axios('/api/stock-servicio').then(datos => datos.data)
    const { data: dataSrv, error: errorSrv, isLoading: isLoadingSrv } = useSWR('/api/stock-servicio', fetcherSrv, {refreshInterval: 100})

    const [ users03, setUsers03 ] = useState([])
    const [ search03, setSearch03 ] = useState("")

    const URLSSS = '/api/stock-servicio'
  
    const showData03 = async () => {
        const response = await fetch(URLSSS)
        const data = await response.json()
        setUsers03(data)
      }   
     //función de búsqueda
    const searcher03 = (e) => {
        setSearch03(e.target.value)   
    }
     //  metodo de filtrado 2   
    const results03 = !search03 ? users03 : users03.filter((dato)=> JSON.stringify(dato.pedido).toLowerCase().includes(search03.toLowerCase()))

     useEffect( ()=> {
      showData03()
    }, [])
    



  


    const [totalVolumen, setTotalVolumen] = useState(0);
    const [totalVolumen01, setTotalVolumen01] = useState(0);
    const [totalVolumen02, setTotalVolumen02] = useState(0);
    const [totalVolumen03, setTotalVolumen03] = useState(0);


    const sumarVolumenes = () => {
        let suma = 0;
        results.forEach((orden) => {
        orden.pedido.forEach((oc) => {
            suma += oc.espesor * oc.ancho * oc.largo * oc.piezas * oc.cantidad / 1000000;
        });
        });
    setTotalVolumen(suma);
    };

    const sumarVolumenesrema = () => {
        let suma = 0;
        results01.forEach((orden) => {
        orden.pedido.forEach((oc) => {
            suma += oc.espesor * oc.ancho * oc.largo * oc.piezas * oc.cantidad / 1000000;
        });
        });
    setTotalVolumen01(suma);
    };

    const sumarVolumenesind = () => {
        let suma = 0;
        results02.forEach((orden) => {
        orden.pedido.forEach((oc) => {
            suma += oc.espesor * oc.ancho * oc.largo * oc.piezas * oc.cantidad / 1000000;
        });
        });
    setTotalVolumen02(suma);
    };

    const sumarVolumenessrv = () => {
        let suma = 0;
        results03.forEach((orden) => {
        orden.pedido.forEach((oc) => {
            suma += oc.espesor * oc.ancho * oc.largo * oc.piezas * oc.cantidad / 1000000;
        });
        });
    setTotalVolumen03(suma);
    };
    




    function calcularVolumen() {
    sumarVolumenes();
    sumarVolumenesrema();
    sumarVolumenesind();
    sumarVolumenessrv();
    }


   return (
        
        <LayoutInformeAgr pagina='Informe-agr'>




          <h1 className="text-3xl font-black text-center py-2">Stock Terminado</h1>
            <p className='py-2 text-center pb-8'>Fecha Actualizacion: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
            
            {data && data.length ? data.map(orden =>
                
                <InformeClasificado
                    key={orden.id}
                    orden={orden}
                    
                />

                ):
                <p className='text-center m-10'>Sin Produccion</p>
            }

           
                
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-2'>  
                <div className="border border-solid border-lime-500">
                    <div className='flex justify-center items-center'>
                        <input value={search} onChange={searcher} type="text" placeholder='Buscar Por Escuadría' className='text-gray-700  text-center'/> 🔍
                    </div>
                    <p className="text-center uppercase font-bold text-xl">Col</p>
                    <p className="text-center text-lg">{formatoNumero(totalVolumen)} m³</p>
                </div>

                <div className="border border-solid border-lime-500">
                    <div className='flex justify-center items-center'>
                        <input value={search01} onChange={searcher01} type="textr" placeholder='Buscar Por Escuadría' className='text-gray-700  text-center'/> 🔍
                    </div>
                    <p className="text-center uppercase font-bold text-xl">Rema</p>
                    <p className="text-center text-lg">{formatoNumero(totalVolumen01)} m³</p>
                </div>

                <div className="border border-solid border-lime-500">
                    <div className='flex justify-center items-center'>
                        <input value={search02} onChange={searcher02} type="text" placeholder='Buscar Por Escuadría' className='text-gray-700  text-center'/> 🔍
                    </div>
                    <p className="text-center uppercase font-bold text-xl">Ind</p>
                    <p className="text-center text-lg">{formatoNumero(totalVolumen02)} m³</p>
                </div>


                <div className="border border-solid border-lime-500">
                    <div className='flex justify-center items-center'>
                        <input value={search03} onChange={searcher03} type="text" placeholder='Buscar Por Escuadría' className='text-gray-700  text-center'/> 🔍
                    </div>
                    <p className="text-center uppercase font-bold text-xl">Servicio</p>
                    <p className="text-center text-lg">{formatoNumero(totalVolumen03)} m³</p>
                </div>


                
                
            </div>

            <div className="text-center py-5 hover:scale-110 text-black font-bold">
                <button className="text-black border border-solid border-lime-500 p-2" onClick={calcularVolumen}>
                    Calcular Volumen
                </button>
            </div>

            

                

                

        </LayoutInformeAgr>
        
        
   )
}