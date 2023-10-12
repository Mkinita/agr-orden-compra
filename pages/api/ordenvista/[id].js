import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        

        const solicitudcotizada = await prisma.nuevaSolicitud.update({
            where:{
                id: parseInt(id)
            },
            data:{
                estado:true,
                
            }
        })
        res.status(200).json(solicitudcotizada)

    }

}