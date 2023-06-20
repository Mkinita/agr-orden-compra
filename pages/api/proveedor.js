import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const proveedoress = await prisma.proveedores.findMany({
  })
  res.status(200).json(proveedoress);
  if (req.method === "POST") {
    const proveedores = await prisma.proveedores.create({
      data: {

        nombreproveedor: req.body.nombreproveedor,
        rut: req.body.rut
      },
    });
    res.json(proveedores);
  }
}