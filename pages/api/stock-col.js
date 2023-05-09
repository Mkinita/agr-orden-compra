import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const stocks = await prisma.stock.findMany({
    where: {
      nombre:'COL',
      estado:false
    }
  })
  
  
  

  res.status(200).json(stocks);
}
