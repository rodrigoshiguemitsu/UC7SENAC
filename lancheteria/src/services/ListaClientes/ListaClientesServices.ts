import prismaClient from "../../prisma";

class ListaClientesServices{
    async execute(){
        const listacliente = await prismaClient.clients.findMany({})
        return(listacliente)
    }
}

export {ListaClientesServices}