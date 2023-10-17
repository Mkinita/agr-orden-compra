import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        

        const solicitudcotizada = await prisma.nuevaorden.update({
            where:{
                id: parseInt(id)
            },
            data:{
                anular:true,
                
            }
        })
        res.status(200).json(solicitudcotizada)

    }

}