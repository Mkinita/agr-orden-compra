import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';

const Articulo = ({articulo}) => {

  const {handlesetArticulo, handleChangeModal} =useCombustible()
  const { nombre } = articulo;
  return (
    <>
      <div class="container mx-auto">
        <div class="w-full px-4">
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
              <tbody>
                <tr>
                  <td class="px-6  p-1 w-3/4 text-center border-b border-gray-300">{nombre}</td>
                  <td class="px-6  p-1 w-1/4 text-center border-b border-gray-300">
                    <button
                      type='button'
                      className=''
                      onClick={()=> {
                      handleChangeModal();
                      handlesetArticulo(articulo)
                      }}
                      >
                      ➕
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Articulo



