import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  
  //Obtener solicitudes
  const solicitudes = await prisma.nuevaSolicitud.findMany({
    where: {
      nombre01:"carlos vera"
    },
    orderBy: {
      id: "desc",
    },
    take: 20,
  });
  

  res.status(200).json(solicitudes);
}
