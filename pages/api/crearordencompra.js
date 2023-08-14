import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const oc = await prisma.nuevaorden.findMany({
//    where:  {
//       estado:false,
//     },
//     orderBy: {
//       id: "desc",
//     },
  })

  res.status(200).json(oc);

  if (req.method === "POST") {
    const nuevaorden = await prisma.nuevaorden.create({
      



      data: {
        fecha: req.body.fecha,
        cotizacion: req.body.cotizacion,
        atencion: req.body.atencion,
        pedido01: req.body.pedido01,
        pedido: req.body.pedido,
        pago: req.body.pago
      },
    });
    res.json(nuevaorden);

  
  }
}