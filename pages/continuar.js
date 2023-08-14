import useSWR from 'swr'
import axios from 'axios'
import LayoutOrdenCompra from "../layout/LayoutOrdenCompra"
import Link from 'next/link'



export default function Admin() {

    

    
     

    return(
        <LayoutOrdenCompra pagina={'Continuar'}>

        <div class="flex h-screen w-full items-center justify-center bg-white bg-cover bg-no-repeat">
        <div class="rounded-xl bg-gray-200 bg-opacity-50 px-16 py-5 shadow-lg backdrop-blur-md max-sm:px-8">
            <div class="text-black">
            <div class="mb-8 flex flex-col items-center">
                
                <h1 class="text-xl font-bold text-black">Felicidades Ya Puedes Generar Una Orden De Compra</h1>
            </div>
            
                <div className="px-32"></div>
                <div className='mb-4 text-lg'>
                <Link Link href="/agregar-valores" class="mb-4 text-lg">
                <h1 class="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md">GENERAR OC</h1>
                </Link>
                </div>

                <div className='mb-4 text-lg'>
                <Link Link href="/orden-compra" class="mb-4 text-lg">
                <h1 class="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md">INICIO</h1>
                </Link>
                </div>
            </div>
            
        </div>
        </div>
        

        

        </LayoutOrdenCompra>
    )
}