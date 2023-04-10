import { PrismaClient } from "@prisma/client";
export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fecha = new Date();
  //Obtener Ordenes
  const saldos = await prisma.pedidos.findMany({
    where:  {
      tipo:'CENTRAL',
    }
  })

  res.status(200).json(saldos);
}