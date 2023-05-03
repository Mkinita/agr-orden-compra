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



// import { PrismaClient } from '@prisma/client'
// import { useState } from 'react'



// function EditUser() {
//   const [cantidad, setCantidad] = useState('')


//   const handleNameChange = (event) => {
//     setCantidad(event.target.value)
//   }



//   const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const res = await axios.post(`/api/stock/${orden.id}`);
//         console.log(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nombre:
//         <input type="text" value={cantidad} onChange={handleNameChange} />
//       </label>





//     </form>
//   )
// }

// export default EditUser




import React, { useState, useEffect } from "react";

function NotificationExample() {
  const [notificationPermission, setNotificationPermission] = useState("default");

  useEffect(() => {
    checkNotificationPermission();
  }, []);

  function checkNotificationPermission() {
    if (!("Notification" in window)) {
      console.log("Notifications not supported");
      setNotificationPermission("unsupported");
    } else if (Notification.permission === "granted") {
      console.log("Notifications already granted");
      setNotificationPermission("granted");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        setNotificationPermission(permission);
      });
    }
  }

  function showNotification() {
    if (notificationPermission === "granted") {
      new Notification("Registro guardado", { body: "El registro se ha guardado correctamente." });
    } else if (notificationPermission === "default") {
      Notification.requestPermission().then(permission => {
        setNotificationPermission(permission);
      });
    }
  }

  function handleSaveRecord() {
    // Lógica para guardar el registro aquí
    showNotification();
  }

  return (
    <div>
      <button onClick={handleSaveRecord}>Guardar registro</button>
      {notificationPermission === "unsupported" && (
        <p>Las notificaciones no están soportadas en este navegador.</p>
      )}
      {notificationPermission === "denied" && (
        <p>Se han denegado los permisos de notificación.</p>
      )}
    </div>
  );
}

export default NotificationExample;
