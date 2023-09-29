import prismaClient from "../../prisma";

interface ListarClienteUnico{
    id:string
}

class ListarClienteUnicoServices{
async execute({id}:ListarClienteUnico){
    const resposta = await prismaClient.clients.findUnique({
        where:{
            id:id
        },
        select :{
            id:true,
            nome:true,
            fixo:true
        }
    })
    return resposta
}




}
export{ListarClienteUnicoServices}