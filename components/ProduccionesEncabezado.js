import Link from "next/link"

const Encabezado = () => {
    

    

    

  return (

    <>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-5 2xl:grid-cols-5 text-center uppercase font-bold text-sm py-2">
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-aserradero">
                <span class="ml-3">Aserradero</span>
            </Link>
            </div>
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-empalillado">
                <span class="ml-3">Staker</span>
            </Link>
            </div>
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-secado">
                <span class="ml-3">Secado</span>
            </Link>
            </div>
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/listado-clasificado">
                <span class="ml-3">Clasificado</span>
            </Link>
            </div>
            <div class="p-2 font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase w-full">
            <Link href="/agregar-producciones">
                <span class="ml-3">Despacho</span>
            </Link>
            </div>
        </div>
    </>
  )
}

export default Encabezado