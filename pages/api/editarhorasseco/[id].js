import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const { horasmesseco, horastrabajadasseco } = req.body;

        

        const ordenActualizada = await prisma.horasseco.update({
            where: { id: parseInt(id) },
            data: {
              horasmesseco: horasmesseco,
              horastrabajadasseco: horastrabajadasseco,
            },
          });
          

        res.status(200).json(ordenActualizada)
    }
}