import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const oc = await prisma.orden.findMany({
//    where:  {
//       estado:false,
//     },
//     orderBy: {
//       id: "desc",
//     },
  })

  res.status(200).json(oc);

  if (req.method === "POST") {
    const orden = await prisma.orden.create({
      data: {
        solicita: req.body.solicita,
        numerosoli: req.body.numerosoli,
        fecha: req.body.fecha,
        cotizacion: req.body.cotizacion,
        atencion: req.body.atencion,
        area: req.body.area,

        cantidades: req.body.cantidades,
        detalles: req.body.detalles,
        valores: req.body.valores,

        cantidad01: req.body.cantidad01 === '' ? null : parseFloat(req.body.cantidad01),
        detalle01: req.body.detalle01 === 0 ? null : req.body.detalle01,
        valor01: Array.isArray(req.body.valor01) ? req.body.valor01[0] : req.body.valor01,


        cantidad02: req.body.cantidad02.length === 0 ? null : req.body.cantidad02,
        descripcion02: req.body.descripcion02.length === 0 ? null : req.body.descripcion02,
        valor02: req.body.valor02.length === 0 ? null : req.body.valor02,

        cantidad03: req.body.cantidad03.length === 0 ? null : req.body.cantidad03,
        descripcion03: req.body.descripcion03.length === 0 ? null : req.body.descripcion03,
        valor03: req.body.valor03.length === 0 ? null : req.body.valor03,
  
        cantidad04: req.body.cantidad04.length === 0 ? null : req.body.cantidad04,
        descripcion04: req.body.descripcion04.length === 0 ? null : req.body.descripcion04,
        valor04: req.body.valor04.length === 0 ? null : req.body.valor04,
  
        cantidad05: req.body.cantidad05.length === 0 ? null : req.body.cantidad05,
        descripcion05: req.body.descripcion05.length === 0 ? null : req.body.descripcion05,
        valor05: req.body.valor05.length === 0 ? null : req.body.valor05,
  
        cantidad06: req.body.cantidad06.length === 0 ? null : req.body.cantidad06,
        descripcion06: req.body.descripcion06.length === 0 ? null : req.body.descripcion06,
        valor06: req.body.valor06.length === 0 ? null : req.body.valor06,
  
        cantidad07: req.body.cantidad07.length === 0 ? null : req.body.cantidad07,
        descripcion07: req.body.descripcion07.length === 0 ? null : req.body.descripcion07,
        valor07: req.body.valor07.length === 0 ? null : req.body.valor07,
  
        cantidad08: req.body.cantidad08.length === 0 ? null : req.body.cantidad08,
        descripcion08: req.body.descripcion08.length === 0 ? null : req.body.descripcion08,
        valor08: req.body.valor08.length === 0 ? null : req.body.valor08,
  
        cantidad09: req.body.cantidad09.length === 0 ? null : req.body.cantidad09,
        descripcion09: req.body.descripcion09.length === 0 ? null : req.body.descripcion09,
        valor09: req.body.valor09.length === 0 ? null : req.body.valor09,


        pedido01: req.body.pedido01,
      },
    });
    res.json(orden);

  
  }
}