import Image from "next/image";
import useCombustible from "../hooks/useCombustible";
import Link from "next/link";

const Sidebar = () => {
    const {faenas} = useCombustible()
    return(
        <>
            <Image width={280} height={100} src="/assets/img/agr.png" alt="logo" className="m-auto"/>

            <div class="px-3 py-4 overflow-y-auto rounded bg-white">
                <ul class="space-y-2">
                

                    <li>
                        <Link href="/" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ➕
                            <span class="ml-3">Ingresar Produccion</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/saldos" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ➕
                            <span class="ml-3">Ingresar Saldos</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/listado-producciones" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            📅
                            <span class="ml-3">Produccion Actual</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/etiquetas" class="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            🎫
                            <span class="ml-3">Etiquetas</span>
                        </Link>
                    </li>
                </ul>


                


                
            </div>
        </>
    )
}


export default Sidebar