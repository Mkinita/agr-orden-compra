const TablaControl = ({orden}) => {
    
    return (
      
      <>
      
      <table className="table-auto w-full text-center bg-white text-gray-700 text-sm hidden sm:table">
              <thead>
                  <tr>
                      <th className="w-20">Producto</th>
                      <th className="w-14">Stock</th>
                      <th className="w-1/12">Despacho</th>
                      <th className="w-10">Saldo</th>
                      <th className="w-8">Calidad</th>
                      <th className="w-10 text-right">Ajustar</th>
                      <th className="w-1 text-right">Volumen</th>



                  </tr>
              </thead>
          </table>


          
  
      </>
    )
  }
  
  export default TablaControl
  