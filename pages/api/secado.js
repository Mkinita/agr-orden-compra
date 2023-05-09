import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const secados = await prisma.secado.findMany({
  })

  res.status(200).json(secados);




  //Crear saldoes
  if (req.method === "POST") {
    const secado = await prisma.secado.create({
      data: {
        nombre: req.body.nombre,
        espesor: req.body.espesor,
        ancho: req.body.ancho,
        largo: req.body.largo,
        piezas: req.body.piezas,
        calidad: req.body.calidad,
        cantidad: req.body.cantidad,
        fecha: req.body.fecha,
      },
    });
    res.json(secado);
  }
}