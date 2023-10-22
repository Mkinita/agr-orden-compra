import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const nuevasolicituds = await prisma.nuevaSolicitud.findMany({
//    where:  {
//       estado:false,
//     },
//     orderBy: {
//       id: "desc",
//     },
  })

  res.status(200).json(nuevasolicituds);

  if (req.method === "POST") {
    const nuevaSolicitud = await prisma.nuevaSolicitud.create({
      data: {
        
        nombre01: req.body.nombre01=('Carlos Vera'),
        fecha: req.body.fecha,
        area: req.body.area,

        cantidades: req.body.cantidades,
        detalles: req.body.detalles,
        valores: req.body.valores,

        cantidad01: req.body.cantidad01,
        detalle01: req.body.detalle01,
        valor01: req.body.valor01,
        


        cantidad02: req.body.cantidad02,
        descripcion02: req.body.descripcion02,
        valor02: req.body.valor02,

        cantidad03: req.body.cantidad03,
        descripcion03: req.body.descripcion03,
        valor03: req.body.valor03,
  
        cantidad04: req.body.cantidad04,
        descripcion04: req.body.descripcion04,
        valor04: req.body.valor04,
        firma: req.body.firma=('carlos')
        
      },
    });
    res.json(nuevaSolicitud);

  
  }
}