import useCombustible from "../hooks/useCombustible";
import { useRouter } from 'next/router'
import axios  from 'axios'
import { toast } from "react-toastify"
import {formatiarFecha} from "helpers/fecha"
import {useEffect, useCallback, useState} from 'react'

const ModalSolicitud = () => {
  const { solicitud, handleChangeModal, handleAgregarPedido, modal,setModal, } = useCombustible();
  const {nombre01,fecha,id,compra,planta,
    area,cotizar
    ,cantidades,detalles,
    cantidad01 ,detalle01,
    cantidad02, descripcion02,
    cantidad03, descripcion03,
    cantidad04, descripcion04,
    cantidad05, descripcion05,
    cantidad06, descripcion06,
    cantidad07, descripcion07,
    cantidad08, descripcion08,
    cantidad09, descripcion09,} = solicitud


  const router = useRouter()

    const cotizarsolicitud = async () => {

        try {

           await axios.post(`/api/cotizarsolicitud/${id}`)
            toast.success('generando solicitud de cotizacion')
            setModal(false);
            setTimeout(() =>{
              router.push('/continuar')
          },1500)
        } catch (error) {
            toast.error('Hubo un error')
        }
    }

    // const eliminarRegistro = async () => {
    //     try {
    //       const response = await fetch(`/api/eliminarsolicitud/${id}`, {
    //         method: 'DELETE',
    //       });
    
    //       if (response.ok) {
    //         toast.success(`Solicitud ${id} eliminada`);
    //         setTimeout(() => {
    //           router.reload();
    //         }, 2000);
    //       } else {
    //         throw new Error('Error al eliminar la Solicitud');
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    

    const eliminarRegistro = async () => {
        const confirmarEliminacion = window.confirm(
          `¿Estás seguro de que deseas eliminar la solicitud ${id}?`
        );
        if (confirmarEliminacion) {
          try {
          const response = await fetch(`/api/eliminarsolicitud/${id}`, {
          method: 'DELETE',
        });
          if (response.ok) {
            toast.success(`${id} eliminada`);
            setTimeout(() => {
                router.reload();
              }, 2000);
          } else {
            throw new Error('Error al eliminar la etiqueta');
              }
          } catch (error) {
              console.log(error);
          }
          }
        };


        const comprobarsolicitud = useCallback(() => {
            return solicitud.length === 0 || id === "" || id.length <5;
            
        },[solicitud, id])


  

  return (
    <div className="">

        <div className="">
            <div className="flex justify-end pb-5">
            <button onClick={handleChangeModal}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </div>
            

            <div class="mx-auto my-2 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1 class="text-xl font-medium">Solicitud nº {id}</h1>
                <p class="text-xs text-slate-500 py-1">{area} </p> 
            </div>
            <div class="inline-flex space-x-2 items-center">
                <div  class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                <p class="text-xs text-slate-500 text-center">{nombre01} </p>                         
                </div>
                <div  class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-slate-200">
                <p class="text-xs text-slate-500 text-center">{formatiarFecha(fecha)} </p>                 
                </div>
            </div>
        </div>
        

        <div id="tasks" class="my-5">
            {cantidades || detalles ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidades}</div>                         
                        </div>
                        <div class="text-slate-500">{detalles}</div>
                    </div>
                </div>
            ):null }
            {cantidad01 || detalle01 ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidad01}</div>                         
                        </div>
                        <div class="text-slate-500">{detalle01}</div>
                    </div>   
                </div>
            ):null }
            {cantidad02 || descripcion02 ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidad02}</div>                         
                        </div>
                        <div class="text-slate-500">{descripcion02}</div>
                    </div> 
                </div>
            ):null }
            {cantidad03 || descripcion03 ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidad03}</div>                         
                        </div>
                        <div class="text-slate-500">{descripcion03}</div>
                    </div>
                </div>
            ):null }
            {cantidad04 || descripcion04 ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidad04}</div>                         
                        </div>
                        <div class="text-slate-500">{descripcion04}</div>
                    </div>
                </div>
            ):null }
            {cantidad05 || descripcion05 ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidad05}</div>                         
                        </div>
                        <div class="text-slate-500">{descripcion05}</div>
                    </div>
                </div>
            ):null }
            {cantidad06 || descripcion06 ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidad06}</div>                         
                        </div>
                        <div class="text-slate-500">{descripcion06}</div>
                    </div>
                </div>
            ):null }
            {cantidad07 || descripcion07 ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidad07}</div>                         
                        </div>
                        <div class="text-slate-500">{descripcion07}</div>
                    </div>
                </div>
            ):null }
            {cantidad08 || descripcion08 ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidad08}</div>                         
                        </div>
                        <div class="text-slate-500">{descripcion08}</div>
                    </div>
                </div>
            ):null }
            {cantidad09 || descripcion09 ? (
                <div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                    <div class="inline-flex items-center space-x-6">
                        <div>
                            <div className="text-slate-500">{cantidad09}</div>                         
                        </div>
                        <div class="text-slate-500">{descripcion09}</div>
                    </div>
                </div>
            ):null }
            
        </div>

        <div class=" grid grid-cols-2 gap-2 w-1/2 m-auto">
            <div class="inline-flex space-x-2 items-center justify-center">
                <button href="#" className= {`${comprobarsolicitud() ? 'bg-indigo-100' : 'bg-amber-400 hover:bg-amber-500'}  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}  onClick={cotizarsolicitud}>
                <p class="text-xs text-black text-center hover:scale-110">Generar O.C.</p>      
                                   
                </button>
                
            </div>

            <div class="inline-flex space-x-2 items-center justify-center" >

            <button
                    type="button"
                    className="hover:scale-110 bg-red-300 'bg-indigo-100 hover:bg-red-500  lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center"
                    onClick={eliminarRegistro}
                >
                    <p class="text-xs text-white text-center hover:scale-110">Eliminar</p>
                </button>

                </div>
        </div>

       
          
    </div>

            
            

        </div>
    </div>
  );
};

export default ModalSolicitud;