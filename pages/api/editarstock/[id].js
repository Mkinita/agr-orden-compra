
import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const {cantidad} = req.body
        

        const ordenActualizada = await prisma.stock.update({
            where: { id: parseInt(id) },
            data: {cantidad: cantidad},
          })

        res.status(200).json(ordenActualizada)
    }
}
