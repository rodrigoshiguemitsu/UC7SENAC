import prismaClient from "../../prisma";

interface ApagarClientes{
    deletar: string
}
class ApagarClientesServices{
    async execute ({deletar}:ApagarClientes){
        await prismaClient.clients.delete({
            where:{
                id:deletar
            }
        })
        return{dados:"Registro apagado com sucesso"}
    }
}

export{ApagarClientesServices}