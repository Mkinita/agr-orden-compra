import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){


    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query


    const updatedUser = await prisma.stock.update({
        where:{
            id: parseInt(id)
        },
        data: {
          cantidad:20
        }
    });
    
    res.status(200).json(updatedUser)

  
}
}





