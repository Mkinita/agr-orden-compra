const Tabla = ({orden}) => {
    
  return (
    
    <>
    
    <table className="table-auto w-full text-center bg-white text-gray-700 text-sm">
            <thead>
                <tr>
                    <th className="px-9 py-4 w-1/5 text-center border border-amber-400">Fecha</th>
                    <th className="px-7 py-4 w-1/5 text-center border border-amber-400">Detalle </th>
                    <th className="px-4 py-4 w-1/5 text-center border border-amber-400">Can</th>
                    <th className="px-6 py-4 w-1/5 text-center border border-amber-400">Cali</th>
                    <th className="px-8 py-4 w-1/5 text-center border border-amber-400">Vol</th>
                </tr>
            </thead>
        </table>

    </>
  )
}

export default Tabla

