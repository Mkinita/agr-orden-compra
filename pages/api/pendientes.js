import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual
  //Obtener solicitudes
  const solicitudes = await prisma.nuevaSolicitud.findMany({
    where: {
      planta:false,
      compra:false,
      nombre01:"Gavino Ugalde"
    },
    orderBy: {
      id: "desc",
    }
  });
  

  res.status(200).json(solicitudes);
}
