import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const saldos = await prisma.saldo.findMany({
  })

  res.status(200).json(saldos);




  //Crear saldoes
  if (req.method === "POST") {
    const saldo = await prisma.saldo.create({
      data: {
        espesor: req.body.espesor,
        ancho: req.body.ancho,
        largo: req.body.largo,
        piezas: req.body.piezas,
        calidad: req.body.calidad,
        fecha: req.body.fecha,
      },
    });
    res.json(saldo);
  }
}