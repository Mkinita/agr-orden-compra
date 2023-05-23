import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const solicitudes = await prisma.solicitud.findMany({
//    where:  {
//       estado:false,
//     },
//     orderBy: {
//       id: "desc",
//     },
  })

  res.status(200).json(solicitudes);

  if (req.method === "POST") {
    const solicitud = await prisma.solicitud.create({
      data: {
        nombre01: req.body.nombre01,
        fecha: req.body.fecha,
        area: req.body.area,
        pedido: req.body.pedido,
      },
    });
    res.json(solicitud);
  }
}