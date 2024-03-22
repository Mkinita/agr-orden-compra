import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const {pago,descuento } = req.body
        

        const ordenActualizada = await prisma.nuevaorden.update({
            where: { id: parseInt(id) },
            data: 
            { 
                pago: pago,
                descuento: descuento
                
            },
          })

        res.status(200).json(ordenActualizada)
    }
}

