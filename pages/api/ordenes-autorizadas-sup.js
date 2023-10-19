import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ordenes = await prisma.nuevaorden.findMany({
   where:  {
    estado:true,
    anular:false
    },
    orderBy: {
      id: "desc",
    },
  })

  res.status(200).json(ordenes);
}