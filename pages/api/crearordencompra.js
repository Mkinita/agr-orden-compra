// import { PrismaClient } from "@prisma/client";

// export default async function handler(req, res) {
//   const prisma = new PrismaClient();

//   const oc = await prisma.nuevaorden.findMany({
//    where:  {
//       estado:false,
//     },
//     orderBy: {
//       id: "desc",
//     },
//   })

//   res.status(200).json(oc);

//   if (req.method === "POST") {
//     const nuevaorden = await prisma.nuevaorden.create({
      



//       data: {
//         fecha: req.body.fecha,
//         cotizacion: req.body.cotizacion,
//         atencion: req.body.atencion,
//         pedido01: req.body.pedido01,
//         pedido: req.body.pedido,
//         pago: req.body.pago,
//         descuento: req.body.descuento
//       },
//     });
//     res.json(nuevaorden);

  
//   }
// }

import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    // Para solicitudes GET, obtén las órdenes
    const oc = await prisma.nuevaorden.findMany({
      // Aquí puedes aplicar tus filtros, ordenamientos, etc.
      // where:  { estado: false },
      // orderBy: { id: "desc" },
    });

    // Envía la respuesta con las órdenes
    return res.status(200).json(oc);
  }

  if (req.method === "POST") {
    try {
      // Para solicitudes POST, crea una nueva orden
      const nuevaorden = await prisma.nuevaorden.create({
        data: {
          fecha: req.body.fecha,
          cotizacion: req.body.cotizacion,
          atencion: req.body.atencion,
          pedido01: req.body.pedido01,
          pedido: req.body.pedido,
          pago: req.body.pago,
          descuento: req.body.descuento,
        },
      });

      // Envía la respuesta con la nueva orden creada
      return res.status(201).json(nuevaorden);
    } catch (error) {
      // Envía un error si algo falla
      return res.status(500).json({ error: 'Error al crear la orden' });
    }
  }

  // Si el método no es GET ni POST, envía un error
  return res.status(405).json({ error: 'Método no permitido' });
}
