import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const produc = await prisma.producciones.findMany({
    where: { estado: false },
    orderBy: {
      id: "desc",
    },

  })

  res.status(200).json(produc);




  //Crear produccioneses
  if (req.method === "POST") {

    const producciones = await prisma.producciones.create({
    data: {
    nombre: req.body.nombre,
    fecha: req.body.fecha,
    volumen: req.body.volumen,
    ingreso: req.body.ingreso,
    ingreso01: req.body.ingreso01,
      },
    });
    res.json(producciones);
  }
}