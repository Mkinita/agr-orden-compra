// import { PrismaClient } from "@prisma/client";

// export default async function handler(req, res) {
//   const prisma = new PrismaClient();
//   //Obtener Ordenes
//   const ordenes = await prisma.nuevaorden.findMany({
//    where:  {
//     estado:true,
//     conforme:true,
//     },
//     orderBy: {
//       id: "desc",
//     },
//   })

//   res.status(200).json(ordenes);
// }

import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual

  // Obtener ordenes
  const ordenes = await prisma.nuevaorden.findMany({
    where: {
      estado: true,
      conforme: true
    },
    orderBy: {
      id: "desc"
    }
  });

  // Filtrar las órdenes que contienen el nombre "Carlos Vera" en el campo "nombre01"
  const ordenesFiltradas = ordenes.filter((orden) => {
    return orden.pedido.some((item) => item.nombre01 === "Carlos Vera");
  });

  res.status(200).json(ordenesFiltradas);
}
