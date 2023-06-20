
const OrdenGeneral = ({proveedor}) => {
    const {id,nombreproveedor,rut} = proveedor



    
  return (
   
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                <tr className="bg-white border-b hover:bg-amber-300 text-sm">
                    <td className="px-6 py-4 w-1/6 text-center border border-amber-400">{nombreproveedor}</td>
                    <td className="px-6 py-4 w-1/12 text-center border border-amber-400">{rut}</td>
                </tr>
            </tbody>
        </table> 
    </>
  )
}

export default OrdenGeneral