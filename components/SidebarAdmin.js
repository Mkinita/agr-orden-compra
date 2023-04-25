import Link from "next/link"
import { useEffect, useCallback, useState } from "react"

export const SidebarAdmin = () => {

   const [isVisible, setIsVisible] = useState(false);
   const [isVisible1, setIsVisible1] = useState(false);
   const [isVisible2, setIsVisible2] = useState(false);
   const [isVisible3, setIsVisible3] = useState(false);
      
   const toggleVisibility = () => {
     setIsVisible(!isVisible);
   };

   const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };


  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };


  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };



    return (
      <div class="px-3 py-4 overflow-y-auto rounded bg-white">
        <ul class="space-y-2">

        <li>
           <button
            className="w-full flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase"
            onClick={toggleVisibility3}
                            
            >
               {isVisible3 ? '➖ Producciones' : '📋 Producciones'}
            </button>
                        
                  
            <div className="">
            
                {isVisible3 && (
            <div className="p-2 space-y-1">

<li>
               <Link href="/listado-producciones" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📃
                  <span class="ml-3">Produccion Actual</span>
               </Link>
            </li>


            <li>
              <Link href="/listado-produciones-fecha" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📅
                  <span class="ml-3">Buscar Produccion Por Fecha</span>
              </Link>
           </li>


           <li>
              <Link href="/agregar-producciones" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                    ➕
                  <span class="ml-3">Agregar Producciones</span>
              </Link>
           </li>


           <li>
              <Link href="/informe-producciones" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📊
                  <span class="ml-3">Informe</span>
              </Link>
           </li>


           


           
            </div>
            
                )}

               </div>
           </li>


        <li>
           <button
            className="w-full flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase"
            onClick={toggleVisibility1}
                            
            >
               {isVisible1 ? '➖ Stock Terminado' : '📋 Stock Terminado'}
            </button>
                        
                  
            <div className="">
            
                {isVisible1 && (
            <div className="p-2 space-y-1">

           <li>
           <div className='grid gap-1 grid-cols-4 md:grid-cols-4 2xl:grid-cols-4 text-center py-2'> 
            <li>
                <Link href="/stock-terminado-col" class=" items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                    <span class="">COL</span>
                </Link>
            </li>
            <li>
                <Link href="/stock-terminado-rema" class=" items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                    <span class="">RM</span>
                </Link>
            </li>
            <li>
                <Link href="/stock-terminado-ind" class=" items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                    <span class="">IND</span>
                </Link>
            </li>
            <li>
                <Link href="/stock-terminado-srv" class=" items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                    <span class="">SRV</span>
                </Link>
            </li>
            
            
            </div>
           </li>

           <li>
           <Link href="/stock-terminado" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📝
                  <span class="ml-3">Stock Total</span>
              </Link>

              
           </li>
           
            </div>
            
                )}

               </div>
           </li>
           

           <li>
           <button
            className="w-full flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase"
            onClick={toggleVisibility}
                            
            >
               {isVisible ? '➖ Pedidos' : '📋 Pedidos'}
            </button>
                        
                  
            <div className="">
            
                {isVisible && (
            <div className="p-2 space-y-1">
                <Link href="/lista-pedidos" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📋
                  <span class="ml-3">Central</span>
              </Link>

              <Link href="/lista-pedidos-rema" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📋
                  <span class="ml-3">REMA</span>
              </Link>

              <Link href="/lista-pedidos-servicio" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📋
                  <span class="ml-3">COL</span>
              </Link>

              <Link href="/lista-pedidos-verde" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📋
                  <span class="ml-3">VERDE</span>
              </Link>


              <Link href="/control-pedidos-informe" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📋
                  <span class="ml-3">Informe</span>
              </Link>

              <Link href="/agregar-pedido" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  ➕
                  <span class="ml-3">Agregar Pedido</span>
              </Link>

              
            </div>
            
                )}

               </div>
           </li>



           <li>
           <button
            className="w-full flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase"
            onClick={toggleVisibility2}
                            
            >
               {isVisible2 ? '➖ Control-Ajustes' : '📋 Control-Ajustes'}
            </button>
                        
                  
            <div className="">
            
                {isVisible2 && (
            <div className="p-2 space-y-1">

           <li>
           <Link href="/stock" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📝
                  <span class="ml-3">Control Stock</span>
              </Link>

              
           </li>
           <li>
           <Link href="/control-pedidos" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                  📝
                  <span class="ml-3">Control Pedidos</span>
              </Link>

              
           </li>

           <li>
           <Link href="/etiqueta-stock" class="flex items-center p-2 text-xs font-black text-black rounded-lg bg-lime-400 dark:text-black hover:bg-gray-100 dark:hover:bg-lime-500 uppercase">
                🚚
                  <span class="ml-3">Despacho</span>
              </Link>

              
           </li>


           


           
            </div>
            
                )}

               </div>
           </li>

           



           

         </ul>



         
            


        </div>
    )
  }
  
  
  export default SidebarAdmin