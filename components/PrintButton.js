import React, { useState,useRef } from "react";
import ReactToPrint from "react-to-print";

const TableToPrint = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.surname}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const PrintButton = () => {
  const [data, setData] = useState([
    { name: "Juan", surname: "Perez", age: 30 },
    { name: "Maria", surname: "Garcia", age: 25 },
    { name: "Pedro", surname: "Sanchez", age: 35 },
  ]);

  

  const TableToPrint = React.forwardRef((props, ref) => {
    // your component code here
  });


  return (
    <div>
      <ReactToPrint
    trigger={() => <button>Imprimir tabla</button>}
    content={() => componentRef.current}
/>
<TableToPrint data={data} ref={componentRef} />


    </div>
  );
};

export default PrintButton;



