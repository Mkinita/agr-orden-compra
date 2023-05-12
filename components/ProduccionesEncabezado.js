import Link from "next/link"

const Encabezado = () => {
    

    

    

  return (

    <>
        <h1 className="text-3xl font-black text-center">Informe Produccion</h1>
        <p className='py-2 text-center'>Fecha Actualizacion: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
        
        <div className="grid gap-4 grid-cols-2 md:grid-cols-7 2xl:grid-cols-7 text-center uppercase font-bold text-sm py-2">
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-aserradero">
                <span class="">Aserradero</span>
            </Link>
            </div>
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-empalillado">
                <span class="">Stacker</span>
            </Link>
            </div>
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-secado">
                <span class="">Secado</span>
            </Link>
            </div>
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-clasificado">
                <span class="">Clasificado</span>
            </Link>
            </div>
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-despacho">
                <span class="">Despacho</span>
            </Link>
            </div>

            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-despacho">
                <span class="">Partidoras</span>
            </Link>
            </div>


            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full hidden md:block">
                <Link href="/informes-agr">
                    <span class="">Inicio</span>
                </Link>
            </div>


            

            
        </div>

        <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-1/4 text-center m-auto lg:hidden md:block">
            <Link href="/informes-agr">
                <span class="">Inicio</span>
            </Link>
        </div>

    </>
  )
}

export default Encabezado