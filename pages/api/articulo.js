import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const articulos = await prisma.articulo.findMany({
  })
  res.status(200).json(articulos);
  if (req.method === "POST") {
    const articulo = await prisma.articulo.create({
      data: {
        nombre: req.body.nombre,
        valor: req.body.valor
      },
    });
    res.json(articulo);
  }
}