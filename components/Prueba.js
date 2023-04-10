// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// function Example() {
//   const [folio, setFolio] = useState(0);

//   function handleGenerateFolio() {
//     setFolio(uuidv4());
//   }

//   return (
//     <div>
//       <p>Folio: {folio}</p>
//       <button onClick={handleGenerateFolio}>Generate Folio</button>
//     </div>
//   );
// }


// export default Example;



import { PrismaClient } from '@prisma/client'
import { useState } from 'react'



function EditUser() {
  const [cantidad, setCantidad] = useState('')


  const handleNameChange = (event) => {
    setCantidad(event.target.value)
  }



  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`/api/stock/${orden.id}`);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={cantidad} onChange={handleNameChange} />
      </label>





    </form>
  )
}

export default EditUser